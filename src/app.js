(function() {
  'use strict';

  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '../src/index.html',
        controller: 'appCtrl',
      })
      .when('/timeline', {
        templateUrl: '../src/timeline.html',
        controller: 'AvaluaHomeCtrl',
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

  app.controller('appCtrl', ['$scope', '$http',
    function($scope, $http) {
      $scope.tipo = "";
      $scope.datos = {
        "username": "synergy",
        "password": "synergy123",
        "type": "V"
      };
      $scope.ingresar = function() {
        $http.post("https://prueba-admision-web.herokuapp.com/session", $scope.datos);
      }
    }
  ])
})();
