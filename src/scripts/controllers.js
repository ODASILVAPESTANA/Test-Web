'use strict';

angular.module('webTest')

    .controller('LoginController', ['$scope', '$http', '$rootScope', '$state', '$uibModal', function ($scope, $http, $rootScope, $state, $uibModal) {
        $scope.loginForm = {};
        $scope.doLogin = function () {
            if (angular.isUndefined($scope.loginForm.usuario)) {
                console.log('what');
                $uibModal.open({
                    template:'<p>Introduzca un usuario</p>'
                });
            }
            else if (angular.isUndefined($scope.loginForm.password)) {
                //activate modal
            }
            else if (angular.isUndefined($scope.loginForm.tipo)) {

                //activate modal
            }

            else {
                // var datos =  {"username": $scope.loginForm.usuario,
                //     "password": $scope.loginForm.password,
                //     "type": $scope.loginForm.tipo};
                // var datosJSON = JSON.stringify(datos);
                $http({

                    method: 'POST',
                    url: 'https://prueba-admision-web.herokuapp.com/session',
                    data: {
                        "username": "synergy",
                        "password": "synergy123",
                        "type": "V"
                    }



                }).then(function exito(response) {
                    if (response.status == 200) {
                        //Almacenamos el cookie id
                        $rootScope.cid = response.data.cid;
                        $state.go('app.timelime');
                    }
                }, function error(response) {
                    console.log(response.statusText);
                    if (response.status == 400) {
                        console.log("Error En Credenciales");
                        console.log(response.data.status);
                    }

                });
            }
        }
    }

    ])


    .controller('TimelineController', ['$scope', '$rootscope', '$http', function ($scope, $rootScope, $http) {
        $http({
            method: "GET",
            url: 'https://prueba-admision-web.herokuapp.com/data?cid=' + $rootScope.cid,
        }).then(function exito(response) {
            $scope.resultados = response.data;
        }, function error(response) {
            if (response.status == 500) {
                alert('Error de autentificacion');
            }
        })
    }]);