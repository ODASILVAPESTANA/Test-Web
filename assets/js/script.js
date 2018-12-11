// script.js
    // create the module and name it demoApp
//    var demoApp = angular.module('app', []);

    // create the controller and inject Angular's $scope
//  demoApp.controller('mainCtrl', function($scope) {

        // create a message to display in our view
   //     $scope.message = 'Hello world!';
   // });

    // include ngRoute for all our routing needs
    var demoApp = angular.module('app', ['ngRoute']);

    // configure our routes
    demoApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'src/views/login.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'src/views/about.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'src/views/contact.html',
                controller  : 'contactCtrl'
            });

            $locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
 demoApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Hello world, this is the home page!';
    });

    demoApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'Hi! This is the about page.';
    });

    demoApp.controller('contactCtrl', function($scope) {
  $scope.message = 'Would you like to contact us?';
    });