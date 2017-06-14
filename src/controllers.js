// CONTROLLERS
angular.module('validationApp')
.controller('userController', function($scope, $http, $window) {
  $scope.show_val_modal = null;
  $scope.type = null;
  $scope.name = null;
  $scope.password = null;

  show_background_index(true);
  
  $scope.submitForm = function(isValid)
  {
    if (isValid)
    {
      disable_button("b_acept",true);
      // Login
      $http.post("https://prueba-admision-web.herokuapp.com/session",
      {
        "username": $scope.name,
        "password": $scope.password,
        "type": $scope.type
      })
      .then(function successCallback(data) {
          parse_json_login(data);
          $window.location.href = '#!/timeLine/'+data["data"]["cid"];
      }, function errorCallback(data) {
          alert("Verifica datos ingresados e intenta nuevamente.");
          console.log("Error iniciando sessión: ");
          console.log(data)
          disable_button("b_acept",false);
      });
    }
    else
    {
      if($scope.type == null || $scope.type == undefined)
      {
        $scope.show_val_modal = "Campo Tipo es requerido";
      }
      else if($scope.name == null || $scope.type == undefined)
      {
        $scope.show_val_modal = "Usuario es requerido";
      }
      else if($scope.password == null || $scope.type == undefined)
      {
        $scope.show_val_modal = "Password es requerido";
      }
      $('#modalAlertLogin').modal('show');
    }
  };
})
.controller("timeLineController", function($scope, $http, $routeParams){
  $scope.listPost = [];
  
  show_background_index(false);
  $(".container_list_tl").css("min-height",(screen_height-80)+'px');
  $http.get("https://prueba-admision-web.herokuapp.com/data?cid="+$routeParams.id)
  .then(function successCallback(data) {
      console.log(data);
      $scope.listPost = data["data"];


  }, function errorCallback(data) {
      $window.location.href = 'src/templates/login.html';
      alert("Inicie sessión nuevamente");
      console.log("Error obteniendo data timeLine.");
      console.log(data)
  });
});