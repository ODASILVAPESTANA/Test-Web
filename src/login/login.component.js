'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: '/src/login/login.template.html',
    controller: ['$window', '$scope', '$location', 'login_service', function PhoneListController($window, $scope, $location, login_service) {
      
      $scope.missingField = undefined;
      $scope.user = {
        type: 'Seleccione...',
        name: undefined,
        password: undefined,
      }
      
      $scope.userTypes = login_service.getTypes();

      $scope.setUserType = function(userType) {
        $scope.user.type = userType;
      }

      $scope.alert = function(){
        $window.alert('Recuperar contraseña.');
      };

      $scope.login = function(user) {
        if(!$scope.user.type || $scope.user.type == "Seleccione...") {
          $scope.missingField = "Tipo de Usuario";
          $('#loginModal').modal('show');
        } else if(!$scope.user.name) {
          $scope.missingField = "Usuario";
          $('#loginModal').modal('show');
        } else if(!$scope.user.password) {
          $scope.missingField = "Contraseña";
          $('#loginModal').modal('show');
        } else {
          login_service.login($scope.user)
          .then(function success(response){
            console.log(response);
            $location.path('/timeline/' + response.data.cid);
          }, function error(error){
            console.log(error);
          })
        }
      };

    }]
  });


/* 'use strict';

var login = angular.module('login', ['login_service']);

login.controller('LoginController', function LoginController($scope, login_service, $window, $location) {
  
  $scope.missingField = undefined;

  $scope.userTypes = login_service.getUserTypes();

  $scope.user = {
    type: "Seleccione...",
    name: undefined,
    password: undefined,
  }

  $scope.setUserType = function(userType) {
    $scope.user.type = userType;
  }

  $scope.alert = function(){
    $window.alert('Recuperar contraseña.');
  };

  $scope.login = function(user) {
    if(!$scope.user.type || $scope.user.type == "Seleccione...") {
      $scope.missingField = "Tipo de Usuario";
      $('#loginModal').modal('show');
    } else if(!$scope.user.name) {
      $scope.missingField = "Usuario";
      $('#loginModal').modal('show');
    } else if(!$scope.user.password) {
      $scope.missingField = "Contraseña";
      $('#loginModal').modal('show');
    } else {
      LoginService.login($scope.user)
      .then(function success(response){
        console.log(response);
        $location.path('/timeline/' + response.user.cid);
      }, function error(error){
        console.log(error);
      })
    }
  };

}); */