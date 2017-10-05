'use strict';

angular.module('testApp')

.controller('LoginController', ['$scope', '$location', '$timeout', 'loginService', 'dataService', function($scope, $location, $timeout, loginService, dataService) {

	var emptyType = "Seleccione...";

	var errorHandler = function() {
		$scope.loginError = true;

		$timeout(function() {
			$scope.loginError = false;
		}, 2000);		
	};

	var successHandler = function(cookie) {
		dataService.setQuery(cookie);
		$location.path('/timeline');
	}

	var clearForm = function() {
		$scope.user.username = "";
		$scope.user.password = "";
		$scope.user.type = emptyType;
		$scope.loginForm.$setPristine();
	};	

	$scope.user = { 
		username: "",
		password: "",
		type: emptyType
	};				

	$scope.loginError = false;
		
	$scope.login = function() {
		// Fail: Missing Data!
		if($scope.loginForm.$invalid || $scope.user.type == emptyType) {
			$scope.missing = "";

			if($scope.user.type == emptyType) {
				$scope.missing = "Tipo";
			}
			else if(!$scope.user.username) {
				$scope.missing = "Usuario";
			}
			else if(!$scope.user.password) {
				$scope.missing = "Contraseña";
			}
			// Could be improve using this: https://angular-ui.github.io/bootstrap/ or something! 
			angular.element('#modalTrigger').trigger('click');			
		}
		// Success: All Data Submitted!
		else {				
			console.log(JSON.stringify($scope.user));							
			
			loginService.session().save(JSON.stringify($scope.user), 
				// Fail: Wrong Credentials!
				function(response) {
					console.log(response.status);										
					successHandler(response.cid);										
				},
				// Success: Right Credentials!
				function(error) {
					console.log(error.data.status);															
					errorHandler();
				}
			);						
		}
		clearForm();		
	};

	$scope.recoverPass = function(recover) {
		$scope.recover = recover;
	};				
}])

.controller('TimelineController', ['$scope', 'dataService', function($scope, dataService) {
	
	$scope.placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo.";

	$scope.items = dataService.getItems().query(
		function(response) {
			console.log(response);
		},
		function(error) {
			console.log(error.data.status);	
		}
	);
}]);


