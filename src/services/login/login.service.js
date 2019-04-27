(function(){

  'use strict';

  var login = angular.module('login_service', []);

  login.service('login_service', ['$http', function($http){

      this.getTypes = function(){
          return ['V', 'E', 'P'];
      };

      this.login = function(user){
          return $http({
              url: 'https://prueba-admision-web.herokuapp.com/session',
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              data: {
                  username: user.name,
                  password: user.password,
                  type: user.type
              }
          });
      };

      this.getInfo = function(cid) {
        return $http({
            url: 'https://prueba-admision-web.herokuapp.com/data?cid='+ cid,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
      }

  }]);

})();