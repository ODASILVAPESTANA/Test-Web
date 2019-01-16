(function() {
  var app = angular.module('TestWeb', ['ui.router']);

   app.run(function($rootScope, $location, $state) {
     console.clear();
     console.log('running');
  });

  app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'src/views/login.html',
        controller : 'LoginController'
      })
      .state('home', {
        url : '/home',
        templateUrl : 'src/views/home.html',
        controller : 'HomeController'
      });

       $urlRouterProvider.otherwise('/login');
  }]);

})();
