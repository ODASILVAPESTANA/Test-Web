'use strict';

angular.module('testApp')

.service('loginService', ['$resource', function($resource) {

  var url = "https://prueba-admision-web.herokuapp.com/session";

  this.session = function() {
    return $resource(url);
  };

}])

.service('dataService', ['$resource', function($resource) {

  var baseUrl = "https://prueba-admision-web.herokuapp.com/data"; 

  this.query = "";

  this.setQuery = function(cookie) {
    this.query = "?cid=" + cookie;    
  }

  this.getItems = function(){
    return $resource(baseUrl + this.query);
  };  	

}]);