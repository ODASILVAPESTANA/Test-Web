	//loginService.js
var app = angular.module('TestWeb');
  app.factory('LoginService', function($http, $rootScope) {
    var isAuthenticated = false;
    return {
      login : function(username, password, tipodoc) {
       //creamos el JSON con los datos del usuario
        data = {
               "username": username,
               "password": password,
               "type": tipodoc
          };
        //realizamos la peticion POST
        $http.post("https://prueba-admision-web.herokuapp.com/session", data)
        .then(function(response){
              //Si son validos los datos se guarda de manera global el codigo cid,
              $rootScope.cid = response.data.cid;
              isAuthenticated = true;
              data = {};
          },
         function(err){
              isAuthenticated = false;
            });

        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
  };

});
