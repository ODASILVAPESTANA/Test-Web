
var app = angular.module('spa', ['ngRoute']); 
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider,$locationProvider) {
         $routeProvider
        .when('/', {templateUrl : 'index.html', controller  : 'controlador'})
        .when('/success', {templateUrl : 'timeline.html' ,controller  : 'controlador2'});
        //.otherwise({templateUrl : 'src/index.html'});
}]);
/*Controlador de  bienvenida*/
app.controller('controlador2', function($scope, $http, $window) {
$http.get('https://prueba-admision-web.herokuapp.com/data?cid='+$scope.cid).then(function (response) {
if (response)
$scope.msg = "Post Data Submitted Successfully!";
}, function (response) {

$scope.msg = "Service not Exists";

$scope.headers = response.headers();
});
});
/*Controlador de Login*/




app.controller('controlador', function($scope, $http, $location, $window) {

  $scope.setNacionalidad = function (nat) {
    $scope.nacionalidad = nat;
    
}
$scope.send = function (usuario, contrasena, nacionalidad) {
alert($scope.nacionalidad)
var data = {
username: usuario,
password: contrasena,
type: $scope.nacionalidad
};

$http.post('https://prueba-admision-web.herokuapp.com/session', JSON.stringify(data)).then(function (response) {
if (response)
$scope.cid = response.cid
$window.location.href = "http://localhost:9000/#!success"
$scope.msg = "Post Data Submitted Successfully!";
}, function (response) {
$scope.msg = "Service not Exists";
$scope.statusval = response.status;
$scope.statustext = response.statusText;
$scope.headers = response.headers();
});
};
});

