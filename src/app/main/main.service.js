(function() {
  'use strict';

  angular
    .module('synergy')
    .service('apiService', apiService);

  /** @ngInject */
  function apiService( $http) {
    var apiHost = 'https://prueba-admision-web.herokuapp.com/';
    var headers= {'Content-type':'application/json'}


  this.login= function (user,pass,type){
      $http.post(apiHost+'session', { "username": user , "password": pass, "type": type }, headers)
    .then(function(response) {
        
        return response.data
    });
  }

  this.data=function (cookie){
    $http.get(apiHost+'data?cid='+cookie)
    .then(function(response){
        return response
    });
  }




  }
})();
