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
                controller  : 'timelineCtrl' 
            })

            $locationProvider.html5Mode(true);
    });

    routerSynergy.controller('mainCtrl', function($scope) {
        $scope.message = 'Login de SynergyGB';
    });

    routerSynergy.controller('aboutCtrl', function($scope) {
        $scope.message = 'Panel usado como timeline';
    });

// Codigo POST del LOGIN

    routerSynergy.controller('appLogin', function($http, $scope, $location, $rootScope) {
        $scope.user = "";
        $scope.password = "";
        $scope.type = "";
        $scope.submit = function (){
            $http.post('https://prueba-admision-web.herokuapp.com/session',{"type": $scope.type, "username": $scope.user, "password": $scope.password})
            .success(function (data) {
                $scope.events = data;
                console.log('Este es el cid que esta siendo almacenado: '+data.cid);
                $rootScope.cid = data.cid;
                console.log($rootScope.cid);
                $location.path('/timeline');
            });
        }
    });

// Codigo GET del TIMELINE

    routerSynergy.controller('timelineCtrl', function($scope, $http, $rootScope) {
        $scope.data = "";
        $http({method: 'get', url: ' https://prueba-admision-web.herokuapp.com/data?cid=' +$rootScope.cid})
        .then(function successCallback(response) {
            $scope.data = response.data; 
        }, function errorCallback(response) {
        });
    });

