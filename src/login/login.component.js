angular.module('login').component('login', {
	templateUrl : '/src/login/login.template.html',
	controller  : [
		'$window',
		'$scope',
		'$location',
		'$http',
		function LoginController($window, $scope, $location, $http) {
			$scope.types = [
				'Seleccione',
				'V',
				'E',
				'P',
			];
			//POST LOGIN TO API
			sendUser = (user) => {
				return $http({
					url     : 'https://prueba-admision-web.herokuapp.com/session',
					method  : 'POST',
					headers : { 'Content-Type': 'application/json' },
					data    : {
						username : user.username,
						password : user.password,
						type     : user.type,
					},
				});
			};

			$scope.recoverPassword = () => $window.alert('Recuperar contraseña');

			$scope.setType = (type) => ($scope.user.type = type);
			//DEFAULT FIELD AND CREATED OBJECT USER
			$scope.user = {
				username : undefined,
				password : undefined,
				type     : $scope.types[0],
			};

			$scope.signIn = (user) => {
				if ($scope.user.type === 'Seleccione' || !$scope.user.username || !$scope.user.password)
					$('#errorModal').modal('show'); //CHECK IF THERE ANY FIELD EMPTY
				else
					sendUser($scope.user).then((response) => {
						//IF NOT, CALL TIMELINE COMPONENT WITH THE USER'S CID
						if (response.data.status === 'ok') $location.path(`/timeline/${response.data.cid}`);
					});
			};
		},
	],
});
