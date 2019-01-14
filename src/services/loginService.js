var   app   =   angular . module ( 'appTestWeb' ) ;

 app . factory ( 'LoginService' ,   function ( )   {
   var   admin   =   'admin' ;
   var   pass   =   'password' ;
   var   isAuthenticated   =   false ;

   return   {
     login   :   function (username, password, tipodoc)   {
       console.log(tipodoc);
     } ,
     isAuthenticated   :   function ( )   {
       return   isAuthenticated ;
     }
   } ;

 } ) ;
