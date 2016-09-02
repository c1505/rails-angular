angular.module('supportTickets')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){
  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('tickets');
    });
  };
  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}]);