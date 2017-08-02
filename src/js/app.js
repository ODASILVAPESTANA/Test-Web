var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap'])
  app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'src/pages/main.html',
    controller: 'mainController'
  })
  .when('/timeline',{
    templateUrl:'src/pages/timeline.html',
    controller: 'timelineController'
  })
  .otherwise({
    redirectTo:'/'
  });
});

app.controller('mainController', function($scope, $http, $location, $uibModal, $rootScope){
  $scope.main={};
  $scope.enviar = function(){
  if(angular.isUndefined($scope.main.type)){
      var modalInstance = $uibModal.open({
        template: '<div><p>Por favor seleccione un tipo de usuario</p></div>'
      }); 
  } else if(angular.isUndefined($scope.main.username)){
            var modalInstance = $uibModal.open({
            template: '<div><p>Por favor ingrese su usuario</p></div>'
          });  
    } else if(angular.isUndefined($scope.main.password)){
             var modalInstance = $uibModal.open({
             template: '<div><p>Por favor ingrese su contraseña</p></div>'
           }); 
      }else{      
        $http({
          method: 'post',
          url: 'https://prueba-admision-web.herokuapp.com/session',
          data: {"username": $scope.main.username, "password": $scope.main.password, "type": $scope.main.type}
        }).then(function successCallback(response){
          console.log(response.data);
          $rootScope.cid = response.data.cid;
          $location.path('/timeline');
          }, function errorCallback(response){
             console.log(response.data);
            if (response.status === 400 ){ alert('Por favor verifique su Usuario y contraseña')}
          });
      }
  }
});

app.controller('timelineController', function($scope, $http, $rootScope){
  $scope.data={};
  $http({
    method: 'get',
    url: 'https://prueba-admision-web.herokuapp.com/data?cid='+$rootScope.cid
  }).then(function successCallback(response){
    console.log(response.data);
    $scope.data =response.data;
  }, function errorCallback(response){
    console.log(response.data);
  });
});