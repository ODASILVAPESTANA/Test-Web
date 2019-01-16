 var app = angular.module('TestWeb');
 app.controller('LoginController', function($scope, $http, $state, $rootScope) {
    $rootScope.title = "Test web angularJs";
    //seteo en true la variable que oculta la modal de errores
    $scope.modalError = true;
    //valido que los datos del formulario no esten vacios
    $scope.formSubmit = function() {
      if ($scope.tipodoc == null) {
        $scope.error = 'Debe seleccionar el tipo de documento';
        $scope.modalError = false;
      }else if ($scope.username == null){
        $scope.error = 'Debe ingresar su usuario';
        $scope.modalError = false;
      } else if ($scope.password == null){
        $scope.error = 'Debe ingresar su contraseña';
        $scope.modalError = false;
      }
      else {
        //creo el objeto con los datos del usuario, seteo en true la variable
        //que inhabilita los campos del formulario mentras se ejecuta la solicitud
        $scope.isProcessing = true;
        data = {
               "username": $scope.username,
               "password": $scope.password,
               "type": $scope.tipodoc
          };
        //realizamos la peticion POST
        $http.post("https://prueba-admision-web.herokuapp.com/session", data)
        .then(function(response){
              //Si son validos los datos se guarda de manera global el codigo cid,
              $rootScope.cid = response.data.cid;
              $scope.error = '';
              $scope.username = '';
              $scope.password = '';
              $scope.tipodoc = '';
              $state.transitionTo('home');
              data = {};
              $scope.isProcessing = false;
              console.log($rootScope.cid);
          },
         function(err){
              //si los datos son erroneos muestro la modal de error
              //y vuelvo a habilitar el formulario para un proximo intento
              $scope.isProcessing = false;
              $scope.error = "Usuario no autorizado";
              $scope.modalError = false;
            });
      }
    };
    //para cerrar la modal con la directiva ng-click
    $scope.cerrarModal = function() {
      $scope.modalError = true;
    };
  });
