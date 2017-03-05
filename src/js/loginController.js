const modalType= `
        <div class="modal-body">
          <p>Debe seleccionar un tipo de usuario</p>
        </div>
`;

const modalUserName = `
        <div class="modal-body">
          <p>Introduzca su nombre de usuario</p>
        </div>
`;

const modalPass = `
        <div class="modal-body">
          <p>Introduzca su contraseña</p>
        </div>
`;



app.controller('loginController', function($scope, $http, $location, $uibModal, $rootScope) {
  
  	$scope.submit = function(isValid){

    if (!isValid) {

  		if (angular.isUndefined($scope.type)){

  			console.log(angular.isUndefined($scope.type));
  			$uibModal.open({
				template: modalType
			});
  		}
  		else if (angular.isUndefined($scope.username)){

  			$uibModal.open({
				template: modalUserName
			});
  				console.log(angular.isUndefined($scope.username));
  		}
  		else if (angular.isUndefined($scope.password)){

  			$uibModal.open({
				template: modalPass
			});
  			console.log(angular.isUndefined($scope.password));
  		}
  		
    }
    else{

  		$http.post('https://prueba-admision-web.herokuapp.com/session',
  				  {"username":$scope.username,"password":$scope.password,"type":$scope.type})
  			 .then(
  			  function successCallback(response){
          console.log(response.data);
          console.log(response.data.cid);
					$rootScope.cid = response.data.cid;
					$location.path('/timeline');
			  		}
			  ,function errorCallback(response){
					console.log(response.status);
					console.log(response.data);
					console.log(response.data.cid);		
					if (response.data.status=="failed"){
						alert('Por favor verifique sus datos su tipo, nombre de usuario o contraseña no coinciden');
					}
			  }
			 );
		}

	}
});
