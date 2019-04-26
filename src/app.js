'use strict';

var synergyApp = angular.module('synergyApp', []);

synergyApp.controller('LoginController', function LoginController($scope) {
  
  $scope.master = {};
  $scope.missingField = undefined;

  $scope.login = function(user) {
    if(!$scope.user.type) {
      $scope.missingField = "Tipo de Usuario";
      $('#loginModal').modal('show');
    } else if(!$scope.user.name) {
      $scope.missingField = "Usuario";
      $('#loginModal').modal('show');
    } else if(!$scope.user.password) {
      $scope.missingField = "Contraseña";
      $('#loginModal').modal('show');
    }
  };

  $scope.reset = function(loginForm) {
    if (loginForm) {
      loginForm.$setPristine();
      loginForm.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
});