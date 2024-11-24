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
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

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
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

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
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el modificador de texto
    document.getElementById("modificadortexto").style.display = "block";
}

function mostrarModificadorTextoConAPI() {
    // Oculta todo menos el modificador de texto con API
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el modificador de texto con API
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
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el operador de matrices
    document.getElementById("operadormatrices").style.display = "block";
}

function mostrarCrudCookies() {
    // Oculta todo menos el CRUD con Cookies
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el CRUD con Cookies
    document.getElementById("crud-cookies").style.display = "block";
}

function mostrarCrudLocalStorage() {
    // Oculta todo menos el CRUD con LocalStorage
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el CRUD con LocalStorage
    document.getElementById("crud-localstorage").style.display = "block";
}

function mostrarCrudSessionStorage() {
    // Oculta todo menos el CRUD con SessionStorage
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el CRUD con SessionStorage
    document.getElementById("crud-sessionstorage").style.display = "block";
}

function mostrarIndexedDB() {
    // Oculta todo menos el CRUD con IndexedDB
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el CRUD con IndexedDB
    document.getElementById("crud-indexeddb").style.display = "block";
}

function mostrarPila() {
    // Oculta todo menos la Pila
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra la Pila
    document.getElementById("pila").style.display = "block";
}

function mostrarTaller() {
    // Oculta todo menos el Taller
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("tareas").style.display = "none";

    // Muestra el Taller
    document.getElementById("taller").style.display = "block";
}

function mostrarTareas() {
    // Oculta todo menos el Tareas
    document.getElementById("ejercicio1").style.display = "none";
    document.getElementById("ejercicio2").style.display = "none";
    document.getElementById("calculadora").style.display = "none";
    document.getElementById("ejercicio-conversor").style.display = "none";
    document.getElementById("modificadortexto").style.display = "none";
    document.getElementById("modificadortextoapi").style.display = "none";
    document.getElementById("operadormatrices").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";

    // Muestra el Tareas
    document.getElementById("tareas").style.display = "block";
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
    document.getElementById("crud-cookies").style.display = "none";
    document.getElementById("crud-localstorage").style.display = "none";
    document.getElementById("crud-sessionstorage").style.display = "none";
    document.getElementById("crud-indexeddb").style.display = "none";
    document.getElementById("pila").style.display = "none";
    document.getElementById("taller").style.display = "none";
    document.getElementById("tareas").style.display = "none";
}

// Llama a esta función para mostrar los ejercicios al inicio
mostrarEjercicios();
