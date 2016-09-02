angular.module('supportTickets', ['ui.router', 'templates'])
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
    .state('login', {
      url: '/login',
      templateUrl: 'home/_login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'home/_register.html',
      controller: 'MainCtrl'
    })
    .state('create', {
      url: '/create',
      templateUrl: 'tickets/_create.html',
      controller: 'MainCtrl'
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
        // tickets: function($http, $stateparams) {
        //   return "this";
        // }
        tickets: ['tickets',
          function( tickets){
            return tickets[0];
          }]
      }
    });

  // $urlRouterProvider.otherwise('home');
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
    $scope.addResponse = function(ticket) {
      $scope.tickets.push({
        response: "$scope.response"
      });
    };
}]);