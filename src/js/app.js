var app = angular.module('SynergyApp',['ngRoute','ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'../src/views/login.html'
  })
  .when('/timeline', {
    templateUrl: '../src/views/timeline.html'
  })
  .otherwise({ 
      redirectTo: '/' 
  }); 
});
