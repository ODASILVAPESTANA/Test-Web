<hr />
        {{ PostDataResponse }}
<script>
    var app = angular.module("app", []);
    app.controller("HttpGetController", function ($scope, $http) {

        $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                username: $scope.usuario,
                password: $scope.pwd,
                type: $scope.tipo
            });
        
          

            $http.post('https://jsonplaceholder.typicode.com/posts', data)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = "hola";
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header;
            });
        };

    });
</script>