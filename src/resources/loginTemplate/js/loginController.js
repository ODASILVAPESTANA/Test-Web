app.controller('loginController', function ($scope, $http, $location, $uibModal, $rootScope) {
    $scope.modalShown = false;
    $scope.submit = function (isValid) {
        if (!isValid) {
            if (angular.isUndefined($scope.type)) {
                $uibModal.open({
                    templateUrl: modalMSJValidationMessage,
                    controller: function ($scope) {
                        $scope.user = {validationMessage: modalType};
                    }
                });
                console.log(angular.isUndefined($scope.type));
            } else if (angular.isUndefined($scope.username)) {
                $uibModal.open({
                    templateUrl: modalMSJValidationMessage,
                    controller: function ($scope) {
                        $scope.user = {validationMessage: modalUserName};
                    }
                });
                console.log(angular.isUndefined($scope.username));
            } else if (angular.isUndefined($scope.password)) {
                $uibModal.open({
                    templateUrl: modalMSJValidationMessage,
                    controller: function ($scope) {
                        $scope.user = {validationMessage: modalPass};
                    }
                });
                console.log(angular.isUndefined($scope.password));
            }
        } else {
            $scope.$modalInstance = $uibModal.open({
                templateUrl: modalMostrarCargando,
                controller: function ($scope) {
                    $scope.user = {usuarioIngresado: $scope.username};
                }
            });
            $http.post('https://prueba-admision-web.herokuapp.com/session',
                    {"username": $scope.username, "password": $scope.password, "type": $scope.type}).then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log(response.data.cid);
                        $rootScope.cid = response.data.cid;
                        $location.path('/timeline');
                        $scope.$modalInstance.close();
                    }
            , function errorCallback(response) {
                console.log(response.status);
                console.log(response.data);
                console.log(response.data.cid);
                if (response.data.status == "failed") {
                    $uibModal.open({
                        templateUrl: modalMSJErrorMessage,
                        controller: function ($scope) {
                            $scope.user = {errorMessage: modalDataError};
                        }
                    });
                    $scope.$modalInstance.close();
                }
            }
            );
        }
    }
}
);
app.controller('recuperarContrasenia', function ($scope, $http, $location, $uibModal, $rootScope) {
    $scope.submit = function (isValid) {
        $uibModal.open({
            templateUrl: modalRescuperarContrasenia
        });
    };
});
