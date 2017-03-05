var app = angular.module('SynergyApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('login',{
    url: '/',
    controller: 'loginController',
    templateUrl:'src/views/login.html'
  })
  $stateProvider.state('timeline', {
    url: '/timeline',
    controller: 'timelineController',
    templateUrl: 'src/views/timeline.html'
  });

  $urlRouterProvider.otherwise('/');﻿
});
/*
    <!--script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.js"></script-->*/