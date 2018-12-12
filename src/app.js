// app.js
(function() {
    var app = angular.module('synergyTestApp', ['ui.router']);
    
    // Inicio de la aplicación
    app.run(function() {
        console.clear();
        console.log('running');
        
    });
  
    // Enrutadores de los eventos
    app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url : '',
            templateUrl : '../views/login.html',
            controller : 'LoginController'
        })
        .state('timeline', {
            url : '',
            templateUrl : '../views/timeline.html',
            controller : 'TimelineController'
        });
      
        $urlRouterProvider.otherwise('/login');
  }]);
 
})();