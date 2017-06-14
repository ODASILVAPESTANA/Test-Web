// ROUTES
angular.module('validationApp', ["ngRoute"])
.config(function($routeProvider){
 $routeProvider
 .when("/",{
    controller: "userController",
    templateUrl: "src/templates/login.html"
 })
 .when("/timeLine/:id",{
    controller: "timeLineController",
    templateUrl: "src/templates/timeLine.html"
 })
 .otherwise("/");
})
.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

var screen_height = $(window).height();
var screen_width = $(window).width();

// Muestra alert con mensaje
function remember_pass(){
	alert('recuperar contraseña');
};
// Recibe respuesta 200 (ok) y habilita boton aceptar
function parse_json_login(json)
{
  if (json["status"] == 200)
  {
    disable_button("b_acept",false);
  }
};
// Habilita o desabilita boton segun id que se reciba
function disable_button(id,flag_disble)
{
  $button = $("#"+id);
  if(flag_disble == true)
  {
    $button.text("Enviando ...");
  }
  else
  {
    $button.text("Aceptar");  
  }
  $button.attr("disabled",flag_disble);
};
// Muestra u oculta imagen en background del index login
function show_background_index(show)
{
  if(show == true)
  {
    $("body").addClass("background_home");
    $("body").css("height",screen_height+'px');
    $("body").css("width",screen_width+'px');
  }
  else
  {
    $("body").removeClass("background_home");
  }
}