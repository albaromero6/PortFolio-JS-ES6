/******************************************************************/
/*                             LOGIN.JS                           */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

// Funciones para manejar localStorage

function setSession(name, value) {
    localStorage.setItem(name, value);
}

function getSession(name) {
    return localStorage.getItem(name);
}

function deleteSession(name) {
    localStorage.removeItem(name);
}

document.addEventListener("DOMContentLoaded", function () {

    let nombre_usuario_cargado = "Alba"; 
    let contrasena_cargada = "Romero"; 

    const formulario = document.getElementById("formulario_login");
    const boton_cerrar = document.getElementById("boton_cerrar");
    const contenido = document.getElementById("contenido");
    const dropdown = document.querySelectorAll(".dropdown"); 

    // Verificar si el usuario ya ha iniciado sesión en localStorage

    const usuario = getSession("username");

    if (usuario) {
        formulario.style.display = "none";            // Ocultar el formulario si hay sesión
        contenido.style.display = "flex";             // Mostrar el contenido si hay sesión
        boton_cerrar.style.display = "flex";          // Mostrar el botón de cerrar sesión
        dropdown.forEach(dropdown => {
            dropdown.style.display = "inline-block";  // Mostrar todos los menús desplegables      
        });

    } else {
        formulario.style.display = "block";           // Mostrar el formulario si no hay sesión
        contenido.style.display = "none";             // Ocultar el contenido si no hay sesión
        boton_cerrar.style.display = "none";          // Ocultar el botón de cerrar sesión
        dropdown.forEach(dropdown => {
            dropdown.style.display = "none";          // Ocultar todos los menús desplegables
        });
    }

    formulario.onsubmit = function (event) {
        event.preventDefault();                       // Evitar que el formulario se envíe automáticamente

        let nombre_usuario = document.getElementById("nombreUsuario").value;
        let contrasena_usuario = document.getElementById("passWordUsuario").value;

        if (nombre_usuario === nombre_usuario_cargado && contrasena_usuario === contrasena_cargada) {

            formulario.style.display = "none";            // Ocultar el formulario si los datos son correctos
            contenido.style.display = "flex";             // Mostrar el contenido si los datos son correctos
            boton_cerrar.style.display = "flex";          // Mostrar el botón de cerrar sesión
            dropdown.forEach(dropdown => {
                dropdown.style.display = "inline-block";  // Mostrar todos los menús desplegables      
            });
            
            setSession("username", nombre_usuario);       // Guardar la sesión en localStorage

        } else {
            document.getElementById("mensaje_error").style.display = "block"; // Mostrar error si los datos no son correctos
        }
    };

    // Manejo del cierre de sesión
    boton_cerrar.onclick = function () {
        cerrarSesion();
    };

    function cerrarSesion() {
        deleteSession("username");                      // Eliminar la sesión de localStorage
        alert("Sesión cerrada");                        // Avisar al usuario que se cerró la sesión
        window.location.href = "index.html";            // Redirigir al inicio después de cerrar sesión
    }
});
