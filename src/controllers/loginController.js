//loginController-js
 var app = angular.module('TestWeb');
 app.controller('LoginController', function($scope, $http, $state, $rootScope) {
    $rootScope.title = "Test web angularJs";
    $scope.modalError = true;
    $scope.formSubmit = function() {
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
            $scope.isProcessing = false;
            $scope.error = "Usuario no autirizado";
            $scope.modalError = false;
          });
    };
  });
