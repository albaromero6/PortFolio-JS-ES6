/******************************************************************/
/*                        SCRIPTINDEXEDDB.JS                      */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Inicializamos IndexedDB y mostramos los datos cuando la página se carga
    iniciarIndexedDB();

    // Manejar el guardado en IndexedDB
    document.getElementById('guardarIndexedDB').addEventListener('click', guardarEnIndexedDB);

    // Asociar los botones +1 y +3 con las funciones de cargar datos desde la API
    document.getElementById('cargarUnoIndexedDB').addEventListener('click', function () {
        cargarDatosDesdeAPI(1); // Cargar 1 dato
    });

    document.getElementById('cargarTresIndexedDB').addEventListener('click', function () {
        cargarDatosDesdeAPI(3); // Cargar 3 datos
    });
});

// Variables de estado para el modo de edición
let isEditingIndexedDB = false;
let editIdIndexedDB = null;

// Inicializar la base de datos IndexedDB
let db;

function iniciarIndexedDB() {
    const request = indexedDB.open('miIndexedDB', 1);

    request.onupgradeneeded = function (event) {
        db = event.target.result;

        if (!db.objectStoreNames.contains('items')) {
            db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
        }
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log("IndexedDB inicializado correctamente.");
        mostrarDatosIndexedDB(); // Mostrar los datos después de que IndexedDB se haya inicializado
    };

    request.onerror = function (event) {
        console.error("Error al inicializar IndexedDB:", event.target.error);
    };
}

// Guardar o editar un registro en IndexedDB
function guardarEnIndexedDB() {
    const nombre = document.getElementById('nombreIndexedDB').value;
    const raza = document.getElementById('razaIndexedDB').value; 
    const estado = document.getElementById('estadoIndexedDB').value; 

    if (!db) {
        console.error("IndexedDB no está inicializado");
        return;
    }

    // Validar que los tres campos están completos
    if (!nombre || !raza || !estado) {
        alert("Por favor, completa todos los campos."); // Si falta algún campo, se muestra el mensaje
        return;
    }

    const transaction = db.transaction(['items'], 'readwrite');
    const store = transaction.objectStore('items');
    const item = { nombre, raza, estado };

    if (isEditingIndexedDB && editIdIndexedDB !== null) {
        item.id = editIdIndexedDB; // Usar el ID existente para actualizar
        store.put(item); // Actualizar el item
    } else {
        store.add(item); // Agregar un nuevo item
    }

    transaction.oncomplete = function () {
        console.log("Elemento guardado:", item);
        limpiarFormularioIndexedDB();
        mostrarDatosIndexedDB(); // Actualizar la tabla después de guardar
        isEditingIndexedDB = false; // Salir del modo de edición
        editIdIndexedDB = null;
    };

    transaction.onerror = function (event) {
        console.error("Error al guardar en IndexedDB:", event.target.error);
    };
}

// Mostrar los datos almacenados en IndexedDB
function mostrarDatosIndexedDB() {
    if (!db) {
        console.error("IndexedDB no está inicializado");
        return;
    }

    const tabla = document.getElementById('tablaindexedDB');
    tabla.innerHTML = ''; // Limpiar la tabla antes de agregar los nuevos datos

    const transaction = db.transaction(['items'], 'readonly');
    const store = transaction.objectStore('items');
    const request = store.getAll();

    request.onsuccess = function () {
        const datos = request.result;

        if (datos.length === 0) {
            // Mostrar mensaje si no hay datos
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="4" style="text-align: center;">No hay datos almacenados</td>`;
            tabla.appendChild(row);
        } else {
            // Agregar filas a la tabla con los datos
            datos.forEach(item => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${item.nombre}</td>
                    <td>${item.raza}</td>
                    <td>${item.estado}</td> <!-- Mostrar el nuevo campo "Estado" -->
                    <td>
                        <button class="update" onclick="editarItemIndexedDB(${item.id})">Editar</button>
                        <button class="delete" onclick="eliminarItemIndexedDB(${item.id})">Borrar</button>
                    </td>
                `;

                tabla.appendChild(row);
            });
        }
    };

    request.onerror = function (event) {
        console.error("Error al obtener datos de IndexedDB:", event.target.error);
    };
}

// Editar un registro en IndexedDB
function editarItemIndexedDB(id) {
    const transaction = db.transaction(['items'], 'readonly');
    const store = transaction.objectStore('items');
    const request = store.get(id);

    request.onsuccess = function () {
        const item = request.result;

        if (item) {
            // Cargar los datos en el formulario
            document.getElementById('nombreIndexedDB').value = item.nombre;
            document.getElementById('razaIndexedDB').value = item.raza; 
            document.getElementById('estadoIndexedDB').value = item.estado;

            // Activar el modo de edición
            isEditingIndexedDB = true;
            editIdIndexedDB = id;
        }
    };

    request.onerror = function (event) {
        console.error("Error al cargar el elemento para edición:", event.target.error);
    };
}

// Eliminar un registro en IndexedDB
function eliminarItemIndexedDB(id) {
    const transaction = db.transaction(['items'], 'readwrite');
    const store = transaction.objectStore('items');
    const request = store.delete(id);

    request.onsuccess = function () {
        console.log("Elemento eliminado correctamente.");
        mostrarDatosIndexedDB(); // Actualizar la tabla después de la eliminación
    };

    request.onerror = function (event) {
        console.error("Error al eliminar el elemento:", event.target.error);
    };
}

// Limpiar el formulario después de guardar o cancelar la edición
function limpiarFormularioIndexedDB() {
    document.getElementById('nombreIndexedDB').value = '';
    document.getElementById('razaIndexedDB').value = ''; 
    document.getElementById('estadoIndexedDB').value = ''; 
}

// Función para cargar datos desde la API y guardarlos en IndexedDB
async function cargarDatosDesdeAPI(cantidad) {
    try {
        const url = `https://rickandmortyapi.com/api/character/`;

        // Realizar la solicitud para obtener personajes
        let data = [];
        for (let i = 0; i < cantidad; i++) {
            let index = Math.floor(Math.random() * 826) + 1; // Índice aleatorio
            const response = await fetch(`${url}${index}`);

            if (!response.ok) {
                throw new Error("Ha ocurrido un error en la solicitud");
            }

            const character = await response.json();
            data.push(character);

            // Guardar el personaje en IndexedDB
            const nombre = character.name;
            const raza = character.species;
            const estado = character.status; 

            const transaction = db.transaction(['items'], 'readwrite');
            const store = transaction.objectStore('items');
            store.add({ nombre, raza, estado });

            console.log(`Personaje ${nombre} guardado en IndexedDB`);
        }

        // Mostrar los datos después de obtenerlos
        mostrarDatosIndexedDB();

    } catch (error) {
        console.error("Error al obtener los datos desde la API:", error);
    }
}
