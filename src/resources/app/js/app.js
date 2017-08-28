var app = angular.module('SynergyApp',['ngRoute','ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'view/templates/loginTemplate/login.html'
  })
  .when('/timeline', {
    templateUrl: 'view/templates/timeLineTemplate/template/inicio.html'
  })
  .otherwise({ 
      redirectTo: '/' 
  }); 
});