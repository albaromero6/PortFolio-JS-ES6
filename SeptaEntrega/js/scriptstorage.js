/******************************************************************/
/*                         SCRIPTSTORAGE.JS                       */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar los datos guardados cuando la página se carga
    mostrarDatos();

    // Manejar el guardado en el localStorage
    document.getElementById('guardarStorage').addEventListener('click', function() {
        guardarEnLocalStorage();
    });
});

// Variable para saber si estamos editando un elemento
let isEditing = false;
let editIndex = -1;

// Función para guardar o editar en localStorage
function guardarEnLocalStorage() {
    const nombreStorage = document.getElementById('nombreStorage').value;
    const valorStorage = document.getElementById('valorStorage').value;

    if (nombreStorage && valorStorage) {
        // Crear un objeto con la información del nombre y valor
        const item = {
            nombre: nombreStorage,
            valor: valorStorage
        };

        // Recuperar los datos existentes del localStorage
        let datosStorage = JSON.parse(localStorage.getItem('datosLocalStorage')) || [];

        if (isEditing) {
            // Si estamos en modo edición, actualizamos el item
            datosStorage[editIndex] = item;
            isEditing = false;  // Desactivamos el modo edición
        } else {
            // Si no estamos editando, simplemente agregamos el nuevo item
            datosStorage.push(item);
        }

        // Guardar el array actualizado de vuelta en localStorage
        localStorage.setItem('datosLocalStorage', JSON.stringify(datosStorage));

        // Limpiar los campos de entrada
        document.getElementById('nombreStorage').value = '';
        document.getElementById('valorStorage').value = '';

        // Actualizar la tabla de datos
        mostrarDatos();
    } else {
        alert("Por favor, completa ambos campos.");
    }
}

function mostrarDatos() {
    const tabla = document.getElementById('tablalocalstorage');
    tabla.innerHTML = '';  // Limpiar la tabla antes de agregar los nuevos datos

    // Obtener los datos del localStorage
    let datosStorage = JSON.parse(localStorage.getItem('datosLocalStorage')) || [];

    if (datosStorage.length === 0) {
        // Si no hay datos, mostrar un mensaje en la tabla
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3" style="text-align: center;">No hay datos almacenados</td>`;
        tabla.appendChild(row);
    } else {
        // Recorrer los datos y agregar filas a la tabla
        datosStorage.forEach((item, index) => {
            const row = document.createElement('tr');

            // Crear las celdas para el nombre, valor y acción
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.valor}</td>
                <td>
                    <button id="editar-${index}" class="update" onclick="editarItem(${index})">Editar</button>
                    <button id="eliminar-${index}" class="delete" onclick="eliminarItem(${index})">Borrar</button>
                </td>
            `;

            // Añadir la fila a la tabla
            tabla.appendChild(row);
        });
    }
}

// Función para editar un item del localStorage
function editarItem(index) {
    // Obtener los datos existentes en localStorage
    let datosStorage = JSON.parse(localStorage.getItem('datosLocalStorage')) || [];

    // Cargar los datos del item seleccionado en el formulario
    const item = datosStorage[index];
    document.getElementById('nombreStorage').value = item.nombre;
    document.getElementById('valorStorage').value = item.valor;

    // Cambiar el estado para editar el item
    isEditing = true;
    editIndex = index;
}

// Función para eliminar un item del localStorage
function eliminarItem(index) {
    // Obtener los datos existentes en localStorage
    let datosStorage = JSON.parse(localStorage.getItem('datosLocalStorage')) || [];

    // Eliminar el item en la posición indicada
    datosStorage.splice(index, 1);

    // Guardar el array actualizado de vuelta en localStorage
    localStorage.setItem('datosLocalStorage', JSON.stringify(datosStorage));

    // Actualizar la tabla de datos
    mostrarDatos();
}