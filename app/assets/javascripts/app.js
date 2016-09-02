angular.module('supportTickets', ['ui.router', 'templates', 'Devise'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('create', {
      url: '/create',
      templateUrl: 'tickets/_create.html',
      controller: 'MainCtrl',
      resolve: {
      ticketPromise: ['tickets', function(tickets){
          return tickets.getAll();
        }]
      }
    })
    .state('tickets', {
      url: '/tickets',
      templateUrl: 'tickets/_ticketsIndex.html',
      controller: 'MainCtrl',
      resolve: {
        ticketPromise: ['tickets', function(tickets){
          return tickets.getAll();
        }]
      }
    })
    .state('tickets.detail', {
      url: '/{ticketId:[0-9]{1,4}}',
      templateUrl: 'tickets/_ticketsDetail.html',
      controller: 'MainCtrl',
      resolve: {
        tickets: ['tickets',
          function( tickets){
            return tickets[0];
          }]
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('tickets');
        });
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('tickets');
        });
      }]
    });
  $urlRouterProvider.otherwise('register');
}])
.factory('tickets', [
  '$http',
  function($http){
    var o = [];
    o.getAll = function() {
      return $http.get('/tickets.json').success(function(data){
        angular.copy(data, o);
      });
    };
    o.create = function(ticket) {
      return $http.post('/tickets.json', ticket).success(function(data){
        o.push(data);
      });
    };
    return o;
}])
.controller('MainCtrl', [
'$scope',
'tickets',
function($scope, tickets){
    $scope.tickets = tickets;
    $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') {return; }
        tickets.create({
            title: $scope.title,
            description: $scope.description,
            status: "Submitted"
        });
        $scope.title = '';
        $scope.description = '';
        $scope.status = '';
    };
    $scope.addComment = function(ticket) {
      ticket.comments.push({
        body: "new comment"
      });
    };
}]);