//loginController-js 
var app = angular.module('synergyTestApp');
app.controller('LoginController', function($scope, $http, $state, $rootScope) {
    $scope.formSubmit = function() {
        // Valido que ninguno de los campos del formulario de login este vacio
        if ($scope.tipodoc == null){
            $scope.error = "Por favor selecione un Tipo de Documento";
            $('#id_login_error').modal();
        } else if ($scope.username == null){
            $scope.error = "Por favor introduzca un valor para el campo Usuario";
            $('#id_login_error').modal();
        } else if ($scope.password == null){
            $scope.error = "Por favor introduzca un valor para el campo Contraseña";
            $('#id_login_error').modal();
        } else {
            // Si todos los campos estan llenos armo un diccionario para pasarselo al methodo
            // post del api de autenticación
            data = { 
                username: $scope.username, 
                password: $scope.password, 
                type: $scope.tipodoc
            }
            $http.post("https://prueba-admision-web.herokuapp.com/session", data)
            .then( function(response){
                // Si las credenciales son validos se monnta el cid en una variable global para
                // que este disponible en el siguiente evento.
                $rootScope.cid = response.data.cid;
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $scope.tipodoc = '';
                $state.transitionTo('timeline');
            }, 
            function(err){
                // El error en el modal
                $scope.error = "La combinación de Tipo de Documento, Usuario y Contraseña es incorrecta";
                $('#id_login_error').modal();
                return false;
            });
        }
    };
});