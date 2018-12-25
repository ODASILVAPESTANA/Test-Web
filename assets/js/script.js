// script.js
// Prueba de Admision Desarrollo Web Gerald Alarcón

// Router de vistas

    var routerSynergy = angular.module('app', ['ngRoute']);

    routerSynergy.config(function($routeProvider, $locationProvider) {
        $routeProvider
  
            .when('/', {
                templateUrl : 'src/views/login.html',
                controller  : 'mainCtrl'
            })
 
            .when('/timeline', {
                templateUrl : 'src/views/timeline.html',
                controller  : 'timelineCtrl' 
            })

            $locationProvider.html5Mode(true);
    });

    routerSynergy.controller('mainCtrl', function($scope) {
        $scope.message = 'Login de SynergyGB';
    });

    routerSynergy.controller('aboutCtrl', function($scope) {
        $scope.message = 'Panel usado como timeline';
    });

// Codigo POST del LOGIN

    routerSynergy.controller('appLogin', function($http, $scope, $location, $rootScope) {
        $scope.user = "";
        $scope.password = "";
        $scope.type = "";
        $scope.submit = function (){
            // Coloque las validaciones que se muestran a continuación por ser requisito dentro de la prueba de admision, sin embargo, considero que la opción mas conveniente es colocar el atributo booleano REQUIRED en el código html de cada input
            if ($scope.type === "" ){
                $('#exampleModalCenter').modal('show');
                $rootScope.errormodal = 'Seleccione un tipo de identificación';
                $rootScope.typemodal = 'ERROR'
            }
            else if ($scope.user === ""){
                $('#exampleModalCenter').modal('show');
                $rootScope.errormodal = 'El campo de usuario está vacio. Por favor escriba su usuario';
                $rootScope.typemodal = 'ERROR'
            }
            else if ($scope.password === ""){
                $('#exampleModalCenter').modal('show');
                $rootScope.errormodal = 'El campo de contraseña está vacio. Por favor escriba su contraseña';
                $rootScope.typemodal = 'ERROR'
            }
            else{
                $('#exampleModalCenter').modal('show');
                $rootScope.errormodal = 'Por favor espere..';
                $rootScope.typemodal = 'Cargando';
                $http.post('https://prueba-admision-web.herokuapp.com/session',{"type": $scope.type, "username": $scope.user, "password": $scope.password})
                .success(function (data) {
                    $scope.events = data;
                    console.log('Este es el cid que esta siendo almacenado: '+data.cid);
                    $rootScope.cid = data.cid;
                    $('#exampleModalCenter').modal('hide');
                    $location.path('/timeline');
                })
                .error(function (data) {
                    $rootScope.errormodal = 'El usuario o la contraseña son incorrectas. Por favor verifique e intente nuevamente';
                    $rootScope.typemodal = 'ERROR';
                })
            }
        }
    });

// Codigo GET del TIMELINE

    routerSynergy.controller('timelineCtrl', function($scope, $http, $rootScope) {
        $scope.data = "";
        $http({method: 'get', url: ' https://prueba-admision-web.herokuapp.com/data?cid=' +$rootScope.cid})
        .then(function successCallback(response) {
            $scope.data = response.data; 
        }, function errorCallback(response) {
        });
    });

