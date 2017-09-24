'use strict';

angular.module('webTest', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngCookies'])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })
        $stateProvider

            .state('app', {
                url: '/',
                templateUrl: '../src/views/login.html',
                controller: 'LoginController'
            })

            .state('timeline', {
                url: '/timeline',
                templateUrl: '../src/views/timeline.html',
                controller: 'TimelineController'
            })

        $urlRouterProvider.otherwise('/');
    });