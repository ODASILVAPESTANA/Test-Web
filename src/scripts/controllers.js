'use strict';

angular.module('webTest')

    .controller('LoginController', ['$scope', '$http', '$cookies', '$state', '$uibModal', function ($scope, $http, $cookies, $state, $uibModal) {
        $scope.loginForm = {};
        $scope.login = {};

        $scope.showAlerta = function(){

        }
        
        $scope.doLogin = function () {
            if (!angular.isDefined($scope.login.usuario)||($scope.login.usuario==='')) {
                $uibModal.open({
                    template:`
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Error</h4>
                        </div>
                        <div class="modal-body">
                            <p>El campo de Usuario no puede estar vacío.</p>
                    </div>`
                });
            }
            else if (angular.isUndefined($scope.login.password)||($scope.login.password==='')) {
                 $uibModal.open({
                    template:`
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Error</h4>
                        </div>
                        <div class="modal-body">
                            <p>El campo de Contraseña no puede estar vacío.</p>
                    </div>`
                });
            }
            else if (angular.isUndefined($scope.login.tipo)) {

                 $uibModal.open({
                    template:`
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Error</h4>
                        </div>
                        <div class="modal-body">
                            <p>Debe seleccionar un tipo de Usuario.</p>
                    </div>`
                });
            }

            else {
                $http({
                    method: 'POST',
                    url: 'https://prueba-admision-web.herokuapp.com/session',
                    data: {
                        "username": $scope.login.usuario,
                        "password": $scope.login.password,
                        "type": $scope.login.tipo
                    }
                }).then(function (response) {
                    if (response.status == 200) {
                        $cookies.put('session',response.data.cid);
                        $state.go('timeline');
                    }
                }, function (response) {
                    console.log(response.statusText);
                    if (response.status == 400) {
                        $uibModal.open({
                            template:`
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Error</h4>
                                </div>
                                <div class="modal-body">
                                    <p>No se encuentra registrado.</p>
                            </div>`
                        });
                    }

                });
            }
        }
    }

    ])

    .controller('TimelineController', ['$scope', '$cookies', '$http', function ($scope, $cookies, $http) {

        var cid = $cookies.get('session');
        $http({
            method: "GET",
            url: 'https://prueba-admision-web.herokuapp.com/data?cid=' + cid,
        }).then(function exito(response) {
            $scope.resultados = response.data;
        }, function error(response) {
            if (response.status == 500) {
                alert('Error de autentificacion');
            }
        })
    }]);