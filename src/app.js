(function() {
  'use strict';

  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '../src/login.html',
        controller: 'appCtrl',
      })
      .when('/timeline', {
        templateUrl: '../src/timeline.html',
        controller: 'timelineCtrl',
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

  app.controller('appCtrl', ['$scope', '$http', '$rootScope','$location',
    function($scope, $http, $rootScope,$location) {
      $scope.tipo = "";
      $scope.datos = {
        "username": "synergy",
        "password": "synergy123",
        "type": "V"
      };
      $scope.ingresar = function() {
        $http.post("https://prueba-admision-web.herokuapp.com/session", $scope.datos).then(function(response) {
          if (response.data.status == 'ok') {
            console.log(response.data);
            $rootScope.cid = response.data.cid;
            $location.path('/timeline');
          } else {
            console.log("No se logeo");
          }
        });
      }
    }
  ])
  app.controller('timelineCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
      $scope.tipo = "";
      $scope.datos = {
        "username": "",
        "password": "",
        "type": ""
      };

      $scope.cargando_datos = function() {
        $http.get("https://prueba-admision-web.herokuapp.com/data?cid=" + $rootScope.cid).then(function(response) {
          if (response.data) {
            console.log(response.data);
            $scope.objetos=response.data;
          } else {
            console.log("No consiguio resultados");
            $scope.objetos=false;
          }
        });

      }
      $scope.cargando_datos();
    }
  ])
})();
