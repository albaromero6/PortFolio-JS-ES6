/******************************************************************/
/*                         SCRIPTSESSION.JS                       */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Mostrar los datos guardados cuando la página se carga
    mostrarDatosSession();

    // Manejar el guardado en el sessionStorage
    document.getElementById('guardarSessionStorage').addEventListener('click', function () {
        guardarEnSessionStorage();
    });
});

// Variable para saber si estamos editando un elemento
let isEditingSession = false;
let editIndexSession = -1;

// Función para guardar o editar en sessionStorage
function guardarEnSessionStorage() {
    const nombreSession = document.getElementById('nombreSessionStorage').value;
    const valorSession = document.getElementById('valorSessionStorage').value;

    if (nombreSession && valorSession) {
        // Crear un objeto con la información del nombre y valor
        const item = {
            nombre: nombreSession,
            valor: valorSession
        };

        // Recuperar los datos existentes del sessionStorage
        let datosSession = JSON.parse(sessionStorage.getItem('datosSessionStorage')) || [];

        if (isEditingSession) {
            // Si estamos en modo edición, actualizamos el item
            datosSession[editIndexSession] = item;
            isEditingSession = false;  // Desactivamos el modo edición
        } else {
            // Si no estamos editando, simplemente agregamos el nuevo item
            datosSession.push(item);
        }

        // Guardar el array actualizado de vuelta en sessionStorage
        sessionStorage.setItem('datosSessionStorage', JSON.stringify(datosSession));

        // Limpiar los campos de entrada
        document.getElementById('nombreSessionStorage').value = '';
        document.getElementById('valorSessionStorage').value = '';

        // Actualizar la tabla de datos
        mostrarDatosSession();
    } else {
        alert("Por favor, completa ambos campos.");
    }
}

// Función para mostrar los datos almacenados en sessionStorage en la tabla
function mostrarDatosSession() {
    const tabla = document.getElementById('tablasessionstorage');
    tabla.innerHTML = '';  // Limpiar la tabla antes de agregar los nuevos datos

    // Obtener los datos del sessionStorage
    let datosSession = JSON.parse(sessionStorage.getItem('datosSessionStorage')) || [];

    if (datosSession.length === 0) {
        // Si no hay datos, mostrar un mensaje en la tabla
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3" style="text-align: center;">No hay datos almacenados</td>`;
        tabla.appendChild(row);
    } else {
        // Recorrer los datos y agregar filas a la tabla
        datosSession.forEach((item, index) => {
            const row = document.createElement('tr');

            // Crear las celdas para el nombre, valor y acción
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.valor}</td>
                <td>
                    <button id="editar-${index}" class="update" onclick="editarItemSession(${index})">Editar</button>
                    <button id="eliminar-${index}" class="delete" onclick="eliminarItemSession(${index})">Borrar</button>
                </td>
            `;

            // Añadir la fila a la tabla
            tabla.appendChild(row);
        });
    }
}

// Función para editar un item del sessionStorage
function editarItemSession(index) {
    // Obtener los datos existentes en sessionStorage
    let datosSession = JSON.parse(sessionStorage.getItem('datosSessionStorage')) || [];

    // Cargar los datos del item seleccionado en el formulario
    const item = datosSession[index];
    document.getElementById('nombreSessionStorage').value = item.nombre;
    document.getElementById('valorSessionStorage').value = item.valor;

    // Cambiar el estado para editar el item
    isEditingSession = true;
    editIndexSession = index;
}

// Función para eliminar un item del sessionStorage
function eliminarItemSession(index) {
    // Obtener los datos existentes en sessionStorage
    let datosSession = JSON.parse(sessionStorage.getItem('datosSessionStorage')) || [];

    // Eliminar el item en la posición indicada
    datosSession.splice(index, 1);

    // Guardar el array actualizado de vuelta en sessionStorage
    sessionStorage.setItem('datosSessionStorage', JSON.stringify(datosSession));

    // Actualizar la tabla de datos
    mostrarDatosSession();
}