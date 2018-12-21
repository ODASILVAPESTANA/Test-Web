// script.js
// Prueba de Admision Desarrollo Web Gerald Alarcón

// Router de vistas

    var routerSynergy = angular.module('app', ['ngRoute']);

    routerSynergy.config(function($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'src/views/login.html',
                controller  : 'mainCtrl'
            })

            .when('/timeline', {
                templateUrl : 'src/views/timeline.html',
                controller  : 'aboutCtrl' 
            })

            $locationProvider.html5Mode(true);
    });

    routerSynergy.controller('mainCtrl', function($scope) {
        $scope.message = 'Login de SynergyGB';
    });

    routerSynergy.controller('aboutCtrl', function($scope) {
        $scope.message = 'Panel usado como timeline';
    });

// Definición de models

    routerSynergy.controller('appLogin', function($http, $scope, $location, $rootScope) {
        $scope.user = "";
        $scope.password = "";
        $scope.type = "";
        $scope.submit = function (){
            $http.post('https://prueba-admision-web.herokuapp.com/session',{"type": $scope.type, "username": $scope.user, "password": $scope.password})
            .success(function (data) {
                $scope.events = data;
                console.log('Este es el cid que esta siendo almacenado: '+data.cid);
                $rootScope.cookieidentify = data.cid;
                console.log($rootScope.cookieidentify);
                $location.path('/timeline');
            });
        }
    });
  
