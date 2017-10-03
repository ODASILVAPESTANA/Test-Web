angularTest.controller("controller", ["$scope", "$http", function($scope, $http){

    

    
        $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            
           // $scope.message = "Hola Laura!";
            var envioData = $http.post("https://prueba-admision-web.herokuapp.com/session", {username: "synergy",
                password: "synergy123",
                type: "V"})
            
           .then(function successCallback(response) {
    
                console.log(response);

                $scope.data = response.data;

          }, function errorCallback(error) {
            
                console.log(error);
          });
        };

        


}]);

