angular.module('timeline').component('timeline', {
	templateUrl : '/src/timeline/timeline.template.html',
	controller  : [
		'$scope',
		'$routeParams',
		'$http',
		function TimelineController($scope, $routeParams, $http) {
			$scope.cid = $routeParams.cid;
			$scope.data = undefined;
			//Connection to API
			getData = (cid) => {
				return $http({
					url     : `https://prueba-admision-web.herokuapp.com/data?cid=${cid}`,
					method  : 'GET',
					headers : { 'Content-Type': 'application/json' },
				});
			};

			getData($scope.cid).then((response) => {
				if (response.data.status === 'failed') console.log('Ha ocurrido un error en el servidor');
				else $scope.data = response.data;
			});
		},
	],
});
