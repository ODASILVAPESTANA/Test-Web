(function() {
    var app = angular.module('appTestWeb', ['ui.router']);
    //se inicia la aplicacion
    app.run(function($rootScope,  $location,  $state) {
        console.clear();
        console.log('app corriendo');

    });
    //configuramos los enrutadores de eventos
    app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url : '',
        templateUrl : 'src/login.html',
        controller : 'LoginController'
    })
    $urlRouterProvider.otherwise('/login');
  }]);
})();
