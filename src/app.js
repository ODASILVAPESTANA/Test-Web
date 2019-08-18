
var app = angular.module('app',['ngRoute','ngAnimate']);

var url = "https://prueba-admision-web.herokuapp.com/session";
    app.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider
        .when('/login', {
            templateUrl: 'src/login.html',
            controller: 'loginCtrl'
        })
        .when('/timeline/:cid', {
            templateUrl: 'src/timeline.html',
            controller: 'timelineCtrl',
        })
        .otherwise({
            redirectTo: '/login'
        })
    }
    ]);



    app.controller('loginCtrl',function($scope,$http,$location){
        $scope.title = "Login";
        $scope.send = function(){
            $http.post(url,$scope.loginForm).then(
                function (response){
                   var newCid = response.data.cid;
                    $location.url('/timeline/'+ newCid);
                },
                function(error){
                    alert("Datos erróneos");
                }
            )
        }

        $scope.showAlert = function(){
            alert('recuperar contraseña');
        }

        $scope.invalidField = function(){
            $('#modalField').modal('show'); // abrir
            //$('#modalField').modal('hide'); // cerrar
        }


    });

    app.controller('timelineCtrl',function($scope,$http,$routeParams){
        $scope.title = "TimeLine";
        $http.get("https://prueba-admision-web.herokuapp.com/data?cid="+$routeParams.cid).then(
            function(value){
                $scope.information = value.data;
                $scope.visible = true;
                
            },
            function(error){
                alert("ERROR",error);
            }
        )
    })