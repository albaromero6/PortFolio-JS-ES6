/******************************************************************/
/*                             LOGIN.JS                           */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

window.onload = function() {

    let nombre_usuario_cargado = "Alba";
    let contrasena_cargada = "Romero";
    let nombre_usuario;
    let intentar_de_nuevo = true;

    while (intentar_de_nuevo) 
    {
        nombre_usuario = prompt("Introduzca su nombre de usuario", "Alba");

        if (nombre_usuario === null || nombre_usuario.trim() === "") {
            alert("Debe introducir un nombre de usuario");
        } else if (nombre_usuario.length < 3) {
            alert("El nombre de usuario debe tener al menos tres caracteres");
        } else if (nombre_usuario !== nombre_usuario_cargado) {
            alert("El nombre de usuario introducido es incorrecto");
        } else {
            break;
        }

        // Pregunta si quiere volver a intentarlo
        intentar_de_nuevo = confirm("¿Desea intentarlo de nuevo?");

        if (!intentar_de_nuevo) 
        {
            return; // Sale del bucle si elige "Cancelar"
        }
    }

    // Solo pide la contraseña si el nombre de usuario es correcto
    let contrasena = prompt("Ingrese su contraseña", "Romero");

    if (contrasena === contrasena_cargada) 
    {
        alert("¡Bienvenido!");
        document.getElementById("contenido").style.display = "flex";
    } 
    else 
    {
        alert("La contraseña introducida es incorrecta");
        let de_nuevo = confirm("¿Desea intentarlo de nuevo?");

        if (de_nuevo) 
        {
            location.reload();  // Recarga la página para intentar de nuevo
        }
    }
}
