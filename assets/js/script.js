// script.js
    var demoApp = angular.module('app', ['ngRoute']);

    demoApp.config(function($routeProvider, $locationProvider) {
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

    demoApp.controller('mainCtrl', function($scope) {
        $scope.message = 'Login de SynergyGB';
    });

    demoApp.controller('aboutCtrl', function($scope) {
        $scope.message = 'Panel usado como timeline';
    });



  
