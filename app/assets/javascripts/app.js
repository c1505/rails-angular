angular.module('supportTickets', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
  // $urlRouterProvider.otherwise('home');
}])
.factory('tickets', [function(){
    var o = {
        tickets: []
    };
    return o;
}])
.controller('MainCtrl', [
'$scope',
'tickets',
function($scope, tickets){
    $scope.tickets = tickets.tickets;
    $scope.tickets = [
  {title: 'Ticket 1', description: "computber be broke"},
];
    $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') {return; }
        $scope.tickets.push({
            title: $scope.title,
            upvotes: 0,
            description: $scope.description
        });
        $scope.title = '';
        $scope.description = '';
        
    };
}]);