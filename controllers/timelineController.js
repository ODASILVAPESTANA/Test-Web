// timelineController.js
app.controller('TimelineController', function($scope, $http, $rootScope){
    // Preparar el diccionario que servira de bus de datos a la plantilla
    $scope.data={};

    // Consultar los datos
    $http.get('https://prueba-admision-web.herokuapp.com/data?cid='+$rootScope.cid)
    .then(function (response){
        // Pasar los datos a la plantilla
        $scope.data =response.data;
    }, function errorCallback(response){
        // El error en la consola
        console.log(response.data);
    });
  });