// se crea el modulo app
var app = angular.module('app', ['ngRoute', 'ui.bootstrap'])

//configuración de routeProvider
app.config(function($routeProvider) {
  $routeProvider
      // ruta por defecto de Login
      .when('/', {
  				templateUrl : 'src/views/login.html',
  				controller  : 'loginController'
  			})
  			// ruta para el timeline
  			.when('/timeline', {
  				templateUrl : 'src/views/timeline.html',
  				controller  : 'timelineController'
  			})
        .otherwise({
          redirectTo: '/'
        });

    });


// Login Controller
app.controller('loginController', function($modal, $scope , $http, $rootScope, $location) {
    $scope.login = {};
    $scope.enviar = function (){
      //Se verifican los valores del formulario
      if (angular.isUndefined($scope.login.type) ){
        var modalInstance = $modal.open({
          template:'<div class="modal-body red"><p class="text-center">Debe seleccionar un Tipo de Usuario</p> </div>'
        });
      }
      else if (angular.isUndefined($scope.login.username)){
        var modalInstance = $modal.open({
          template:'<div class="modal-body red"><p class="text-center">Debe ingresar un Usuario</p> </div>'
        });
      }
      else if (angular.isUndefined($scope.login.password)){
        var modalInstance = $modal.open({
          template:'<div class="modal-body red"><p class="text-center">Debe ingresar un Password</p> </div>'
        });
      }
      else{
          //Se realiza la petición PosT
          var header= {'Content-type':'application/json'};
          $http({
            method: 'post',
            url: 'https://prueba-admision-web.herokuapp.com/session',
            data: {"username": $scope.login.username , "password": $scope.login.password, "type": $scope.login.type},
            headers: header
          }).then(function successCallback(response) {
              $rootScope.cid = response.data.cid;
              //Redireccionamos
              $location.path('/timeline');
            }, function errorCallback(response) {
              if(response.status === 400 ){alert('Por favor verifique su Usuario y Contraseña')}
            });
        }
    }
});

// timeline Controller
app.controller('timelineController', function($scope, $http, $rootScope) {
  $scope.data = "";
  $http({
    method: 'get',
    url: ' https://prueba-admision-web.herokuapp.com/data?cid=' +$rootScope.cid
  }).then(function successCallback(response) {
      $scope.data = response.data;
    }, function errorCallback(response) {
    });
});
