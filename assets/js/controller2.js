angularTest.controller2("controller2", ["$scope", "$http", function($scope, $http){

   // $scope.message = "Hola Laura!";

    var url = "https://prueba-admision-web.herokuapp.com/data?cid=k6lj87hj8";

    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
    
        console.log(response);

        $scope.data = response.data;

  }, function errorCallback(error) {
    
        console.log(error);
  });

}]);