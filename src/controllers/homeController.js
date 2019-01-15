//homeController.js
var app = angular.module('TestWeb');

  app.controller('HomeController',
  function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.user = $rootScope.userName;
});
