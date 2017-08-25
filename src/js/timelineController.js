app.controller("timelineController",['$scope','timelineService',function($scope,timelineService){
	var promise = timelineService.getData();
	promise.then(function (data){
		$scope.datos = data.data;
		console.log(data.status);
		console.log($scope.datos);
	});
}])