

$(document).ready(function(){
    $("#btnvalidar").click(function(){
        var valor = document.getElementById("email").value;
        var valor2 = document.getElementById("pwd").value;
        if (valor == null || valor.length == 0 || valor2 == null || valor2.length == 0 ) {
        	alert("Debe ingresar los datos")

        }else{
        alert("Datos ingresados con éxito");
        }
    });
});