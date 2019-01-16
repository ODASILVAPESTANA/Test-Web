var app = angular.module('TestWeb');

  app.controller('HomeController',
  function($scope, $rootScope, $stateParams, $state, $http) {
      //creo un objeto vacio para la respuesta del servicio
      $scope.data={};
      //realizo la peticion GET pasandole el codigo cid
      $http.get('https://prueba-admision-web.herokuapp.com/data?cid='+$rootScope.cid)
      .then(function (response){
          //paso la data a la vista
          $scope.data =response.data;
          console.log($scope.data);
      }, function errorCallback(response){
          console.log(response.data);
      });
});
