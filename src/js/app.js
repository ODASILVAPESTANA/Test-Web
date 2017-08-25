var app = angular.module('SynergyApp',['ngRoute','ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'../src/view/login.html'
  })
  .when('/timeline', {
    templateUrl: '../src/view/timeline.html'
  })
  .otherwise({ 
      redirectTo: '/' 
  }); 
});