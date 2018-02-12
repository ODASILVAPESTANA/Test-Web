var app = angular.module('Test-Web', ['ngRoute', 'ui.bootstrap']);

	app.config(function($routeProvider) {
		   $routeProvider.when('/', {
		    templateUrl: "src/login.html",
		    controller: "formTest"
		  });
	   
		  $routeProvider.when('/timeline', {
		    templateUrl: "src/timeline.html",
		    controller: "timeTest"
		  });  
	   
		  $routeProvider.otherwise({
			redirectTo: '/'
		  });   
	});

	app.controller('formTest', function($scope, $http, $uibModal, $rootScope, $location){
	      $scope.user={};
	      $scope.login = function (){
	   	if(angular.isUndefined($scope.user.type)){
			   alert("Por favor, seleccione un Tipo de persona.");
	       }else if(angular.isUndefined($scope.user.username)){
	        	   alert("Por favor, ingrese su Usuario.");
	      }else if(angular.isUndefined($scope.user.password)){
	      		   alert("Por favor, ingrese su Contrase\361a.");
	      }else {      
		   $http({
		  method: 'post',
		  url: 'https://prueba-admision-web.herokuapp.com/session',
		  data: {"username": $scope.user.username, "password": $scope.user.password, "type": $scope.user.type}
		}).then(function acceso(respuesta){
	             console.log(respuesta.data); 
		    $rootScope.cid = respuesta.data.cid;
		    $location.path('/timeline');
		  //  alert($rootScope.cid);
		  }, function negado(respuesta){
		     console.log(respuesta.data);
		    if (respuesta.status == 400 ){ alert(' \241 Por favor, verifique los datos ingresados!')}
		  });
	      }
		}
	});

	app.controller('timeTest', function($scope, $http, $rootScope){
		  $scope.datos={};
		  $http({
		    method: 'get',
		    url: 'https://prueba-admision-web.herokuapp.com/data?cid='+$rootScope.cid
		  }).then(function successCallback(respuesta){
		    console.log(respuesta.data);
		  $scope.datos = respuesta.data;
		  }, function errorCallback(response){
		    console.log(respuesta.data);
		  });
	});
