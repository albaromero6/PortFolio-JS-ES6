/******************************************************************/
/*                        SCRIPTCOOKIES.JS                        */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar los datos de las cookies cuando la página se carga
    mostrarDatosCookies();

    // Manejar el guardado de las cookies
    document.getElementById('guardarCookie').addEventListener('click', function() {
        guardarEnCookies();
    });
});

// Variable para saber si estamos editando un elemento
let isEditingCookie = false;
let editIndexCookie = -1;

// Función para guardar o editar una cookie
function guardarEnCookies() {
    const nombreCookie = document.getElementById('nombreCookie').value;
    const valorCookie = document.getElementById('valorCookie').value;

    if (nombreCookie && valorCookie) {
        // Crear un objeto con la información del nombre y valor de la cookie
        const cookieItem = {
            nombre: nombreCookie,
            valor: valorCookie
        };

        // Recuperar los datos de las cookies existentes
        let datosCookies = obtenerCookies() || [];

        if (isEditingCookie) {
            // Si estamos en modo edición, actualizamos la cookie
            datosCookies[editIndexCookie] = cookieItem;
            isEditingCookie = false;  // Desactivamos el modo edición
        } else {
            // Si no estamos editando, simplemente agregamos la nueva cookie
            datosCookies.push(cookieItem);
        }

        // Guardar las cookies actualizadas
        guardarCookies(datosCookies);

        // Limpiar los campos de entrada
        document.getElementById('nombreCookie').value = '';
        document.getElementById('valorCookie').value = '';

        // Actualizar la tabla de cookies
        mostrarDatosCookies();
    } else {
        alert("Por favor, completa ambos campos.");
    }
}

// Función para mostrar los datos de las cookies en la tabla
function mostrarDatosCookies() {
    const tabla = document.getElementById('tablaCookies');
    tabla.innerHTML = '';  // Limpiar la tabla antes de agregar los nuevos datos

    // Obtener los datos de las cookies
    let datosCookies = obtenerCookies() || [];

    if (datosCookies.length === 0) {
        // Si no hay cookies, mostrar un mensaje en la tabla
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3" style="text-align: center;">No hay datos almacenados</td>`;
        tabla.appendChild(row);
    } else {
        // Recorrer los datos y agregar filas a la tabla
        datosCookies.forEach((cookie, index) => {
            const row = document.createElement('tr');

            // Crear las celdas para el nombre, valor y acción
            row.innerHTML = `
                <td>${cookie.nombre}</td>
                <td>${cookie.valor}</td>
                <td>
                    <button id="editar-${index}" class="update" onclick="editarCookie(${index})">Editar</button>
                    <button id="eliminar-${index}" class="delete" onclick="eliminarCookie('${cookie.nombre}')">Borrar</button>
                </td>
            `;

            // Añadir la fila a la tabla
            tabla.appendChild(row);
        });
    }
}

// Función para editar una cookie
function editarCookie(index) {
    // Obtener las cookies almacenadas
    let datosCookies = obtenerCookies() || [];

    // Cargar los datos de la cookie seleccionada
    const cookie = datosCookies[index];
    document.getElementById('nombreCookie').value = cookie.nombre;
    document.getElementById('valorCookie').value = cookie.valor;

    // Cambiar el estado para editar la cookie
    isEditingCookie = true;
    editIndexCookie = index;
}

// Función para eliminar una cookie
function eliminarCookie(nombreCookie) {
    // Eliminar la cookie del navegador
    document.cookie = `${nombreCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    // Obtener las cookies almacenadas
    let datosCookies = obtenerCookies() || [];

    // Filtrar las cookies para eliminar la cookie con el nombre indicado
    datosCookies = datosCookies.filter(cookie => cookie.nombre !== nombreCookie);

    // Guardar las cookies actualizadas
    guardarCookies(datosCookies);

    // Actualizar la tabla de cookies
    mostrarDatosCookies();
}

// Función para obtener las cookies
function obtenerCookies() {
    const cookies = document.cookie.split(';');
    let cookieArray = [];

    cookies.forEach(cookie => {
        const [nombre, valor] = cookie.trim().split('=');
        if (nombre && valor) {
            cookieArray.push({ nombre, valor });
        }
    });

    return cookieArray;
}

// Función para guardar las cookies
function guardarCookies(datosCookies) {
    // Limpiar las cookies actuales
    document.cookie = "datosCookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Guardar cada cookie
    datosCookies.forEach(cookie => {
        // Establecer la cookie con una duración de expiración en 1 minuto
        document.cookie = `${cookie.nombre}=${cookie.valor}; path=/; max-age=60`;
    });
}
