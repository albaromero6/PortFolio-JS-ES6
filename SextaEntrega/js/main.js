/******************************************************************/
/*                             MAIN.JS                            */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

function mostrarCalculadora() {
    // Oculta todo menos la calculadora
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";

    // Muestra la calculadora
    document.getElementById("calculadora").style.display = "block";
}

function mostrarConversor() {
    // Oculta todo menos el conversor de bases
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";

    // Muestra el conversor de bases
    document.getElementById("ejercicio-conversor").style.display = "block";
}

function mostrarModificadorTexto() {
    // Oculta todo menos el modificador de texto
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";

    // Muestra el modificador de texto
    document.getElementById("modificadortexto").style.display = "block";
}

function mostrarModificadorTextoConAPI() {
    // Oculta todo menos el modificador de texto
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";

    // Muestra el modificador de texto
    document.getElementById("modificadortextoapi").style.display = "block";
}

function mostrarOperadorDeMatrices() {
    // Oculta todo menos el operador de matrices
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";

    // Muestra el modificador de texto
    document.getElementById("operadormatrices").style.display = "block";
}

function mostrarEjercicios() {
    // Muestra los ejercicios
    document.getElementById("ejercicio1").style.display = "block";
    document.getElementById("ejercicio2").style.display = "block";

    // Oculta todo lo demás
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
}

// Llama a esta función para mostrar los ejercicios al inicio
mostrarEjercicios();
