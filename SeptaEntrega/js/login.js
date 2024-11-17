/******************************************************************/
/*                             LOGIN.JS                           */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

// Configuración de IndexedDB
const dbName = "LoginDB";
const storeName = "SessionStore";

// Función para abrir la base de datos
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id" });
            }
        };

        request.onsuccess = function (event) {
            resolve(event.target.result);
        };

        request.onerror = function (event) {
            reject("Error al abrir la base de datos: " + event.target.errorCode);
        };
    });
}

// Funciones para manejar la sesión
function setSessionInDB(value) {
    openDB().then(db => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        store.put({ id: "sessionStatus", loggedIn: value });
    });
}

function getSessionFromDB() {
    return new Promise((resolve) => {
        openDB().then(db => {
            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
            const request = store.get("sessionStatus");

            request.onsuccess = function () {
                resolve(request.result ? request.result.loggedIn : false);
            };

            request.onerror = function () {
                resolve(false);
            };
        });
    });
}

function deleteSessionFromDB() {
    openDB().then(db => {
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        store.delete("sessionStatus");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let nombre_usuario_cargado = "Alba";
    let contrasena_cargada = "Romero";

    const formulario = document.getElementById("formulario_login");
    const boton_cerrar = document.getElementById("boton_cerrar");
    const contenido = document.getElementById("contenido");
    const dropdown = document.querySelectorAll(".dropdown");

    // Verificar si el usuario ya ha iniciado sesión
    getSessionFromDB().then(isLoggedIn => {
        if (isLoggedIn) {
            formulario.style.display = "none";
            contenido.style.display = "flex";
            boton_cerrar.style.display = "flex";
            dropdown.forEach(dropdown => {
                dropdown.style.display = "inline-block";
            });
        } else {
            formulario.style.display = "block";
            contenido.style.display = "none";
            boton_cerrar.style.display = "none";
            dropdown.forEach(dropdown => {
                dropdown.style.display = "none";
            });
        }
    });

    formulario.onsubmit = function (event) {
        event.preventDefault();

        let nombre_usuario = document.getElementById("nombreUsuario").value;
        let contrasena_usuario = document.getElementById("passWordUsuario").value;

        if (nombre_usuario === nombre_usuario_cargado && contrasena_usuario === contrasena_cargada) {
            formulario.style.display = "none";
            contenido.style.display = "flex";
            boton_cerrar.style.display = "flex";
            dropdown.forEach(dropdown => {
                dropdown.style.display = "inline-block";
            });

            setSessionInDB(true); // Guardar la sesión en IndexedDB
        } else {
            document.getElementById("mensaje_error").style.display = "block";
        }
    };

    // Manejo del cierre de sesión
    boton_cerrar.onclick = function () {
        cerrarSesion();
    };

    // Eliminar la sesión de IndexedDB y mostrar un Alert
    function cerrarSesion() {
        deleteSessionFromDB(); 
        alert("Sesión cerrada");
        window.location.href = "index.html";
    }
});
