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
    // check to make sure the form is completely valid
    if (!isValid) {

  		if (angular.isUndefined($scope.type)){
  			//alert('no pusiste tipo');
  			console.log(angular.isUndefined($scope.type));
  			$uibModal.open({
				template: modalType
			});
  		}
  		else if (angular.isUndefined($scope.username)){
  			//alert('no pusiste usuario');
  			$uibModal.open({
				template: modalUserName
			});
  				console.log(angular.isUndefined($scope.username));
  		}
  		else if (angular.isUndefined($scope.password)){
  			//alert('no pusiste clave');
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
						alert('Por favor verifique el tipo de usuario, el y contraseña');
					}
			  }
			 );
		}

	}
});
