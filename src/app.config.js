angular.module('admision').config([
	'$routeProvider',
	function config($routeProvider) {
		$routeProvider
			.when('/login', {
				//ROUTE LOGIN
				template : '<login></login>',
			})
			.when('/timeline/:cid', {
				//ROUTE TIMELINE
				template : '<timeline></timeline>',
			})
			.otherwise('/login');
	},
]);
