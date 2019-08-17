angular.module('timeline', [])
.controller('timeline-container', function($scope, $http) {
    $http.post('https://prueba-admision-web.herokuapp.com/session').
        then(function(response) {
            $scope.greeting = response.data;
        });
}); 