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
      controller: 'MainCtrl'
    })
    .state('tickets.detail', {
      // url: 'tickets/:id',
      url: '/{ticketId:[0-9]{1,4}}',
      template: 'tickets/_ticketsDetail.html',
      controller: 'MainCtrl',
      // resolve: {
      //   // tickets: function($http, $stateparams) {
      //   //   return "this";
      //   // }
      //   tickets: ['tickets',
      //     function( tickets){
      //       return tickets.all();
      //     }]
      // }
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
  {id: 1,
   title: 'Ticket 1',
   description: "can't login",
   status: "Complete",
   name: "Bob",
   email: "Bob@gmail.com"
 },{id: 2,
   title: 'Ticket ',
   description: "back button broken",
   status: "In Progress",
   name: "Fred",
   email: "Fred@gmail.com"
 },
];
    $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') {return; }
        $scope.tickets.push({
            title: $scope.title,
            description: $scope.description,
            status: "Submitted"
        });
        $scope.title = '';
        $scope.description = '';
        $scope.status = '';
    };
}]);