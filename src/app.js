
var app = angular.module('app',['ngRoute']);
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
            resolve: {
                data: function($http,$routeParams,$location)
                {   console.log("data tl");
                    console.log($routeParams,$routeParams.cid, $location.search().cid);
                   
                }
            }
        })
        .otherwise({
            redirectTo: '/login'
        })
    }
    ]);


    app.controller('loginCtrl',function($scope,$http,$location){
        console.log("login controller ");
        $scope.send = function(){
            console.log("send",$scope.loginForm);
            $http.post(url,$scope.loginForm).then(
                function (response){
                    console.log("Good",response);
                    //alert("Inicio exitoso "+response.data.cid);
                    var newCid = response.data.cid;
                    $location.url('/timeline/'+ newCid);
                },
                function(error){
                    alert("Datos erròneos");
                }
            )
        }

        $scope.showAlert = function(){
            alert('recuperar contraseña');
        }

        $scope.invalidField = function(){
            console.log("campos invalido");
        }


    });

    app.controller('timelineCtrl',function($scope,$http,$routeParams){
        $http.get("https://prueba-admision-web.herokuapp.com/data?cid="+$routeParams.cid).then(
            function(value){
                console.log("EXITO",value);
            },
            function(error){
                console.log("ERROR",error);
            }
        )
        console.log("timeline "+$routeParams.cid);

    })