'use strict';

angular.module('testApp', ['ngRoute', 'ngResource'])

.config(function($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'src/views/login.html',
		controller: 'LoginController'		
	})

	.when('/timeline', {
		templateUrl: 'src/views/timeline.html',
		controller: 'TimelineController'		
	})

	.otherwise({
		redirectTo: '/login'
	});
});