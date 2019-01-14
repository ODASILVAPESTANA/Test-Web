var   app   =   angular . module ( 'appTestWeb' ) ;
app . controller ( 'LoginController' ,   function ($scope, $rootScope, $stateParams, $state, loginService){
   $ rootScope.title   =   "Test web angular JS" ;
   $ scope.formSubmit   =   function ( )   {
      if ( LoginService.login ($scope.username ,  $scope.password, $scope.tipodoc) )   {
       //$ rootScope . userName   =   $ scope . username ;
       $ scope . error   =   '' ;
       $ scope . username   =   '' ;
       $ scope . password   =   '' ;
       $ scope . tipodoc   =   '' ;
     }   else   {
       $ scope . error   =   "Incorrect username/password !" ;
     }
   } ;
 } ) ;
