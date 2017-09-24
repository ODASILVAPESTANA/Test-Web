'use strict';

angular.module('webTest', ['ui.router','ui.bootstrap','ngResource'])

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            .state('app', {
                url:'/',
                views: {
                    'content': {
                        templateUrl : 'views/login.html',
                        controller  : 'LoginController'
                    }
                }
            })

            .state('app.timeline', {
                url:'app.timeline',
                views: {
                    'content': {
                        templateUrl : 'views/timeline.html',
                        controller  : 'TimelineController'                  
                    }
                }
            })

         $urlRouterProvider.otherwise('/');
});