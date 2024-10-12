/******************************************************************/
/*                             MAIN.JS                            */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

function mostrarCalculadora() {
    // Oculta los ejercicios y el conversor
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    
    // Muestra la calculadora
    document.getElementById("calculadora").style.display = "block";
}

function mostrarConversor() {
    // Oculta los ejercicios y la calculadora
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    
    // Muestra el conversor de bases
    document.getElementById("ejercicio-conversor").style.display = "block";
}

function mostrarEjercicios() {
    // Muestra los ejercicios
    document.getElementById("ejercicio1").style.display = "block";
    document.getElementById("ejercicio2").style.display = "block";
    
    // Oculta la calculadora y el conversor
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
}

// Llama a esta función para mostrar los ejercicios al inicio
mostrarEjercicios();
