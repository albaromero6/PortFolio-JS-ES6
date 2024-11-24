/******************************************************************/
/*                         TAREASMODULO.JS                        */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

import { TareasNormales, TareasConPrioridad } from '../clases/tareas.js';

export class TareasApp {
    constructor() {
        // Instanciamos las clases de tareas
        this.tareasNormales = new TareasNormales();
        this.tareasConPrioridad = new TareasConPrioridad();

        // Selección de elementos DOM
        this.tablaTareas = document.getElementById('tablaTareas');
        this.tablaTareasPrioridad = document.getElementById('tablaTareasPrioridad');
        this.mensajeTareasNormales = document.getElementById('mensajeTareasNormales');
        this.mensajeTareasPrioridad = document.getElementById('mensajeTareasPrioridad');
        this.tareaInput = document.getElementById('tareaInput');
        this.prioridadInput = document.getElementById('prioridadInput');
        this.prioridadValor = document.getElementById('prioridadValor');

        // Botones
        this.botonAnadirTarea = document.getElementById('anadirTarea');
        this.botonEliminarTarea = document.getElementById('eliminarTarea');
        this.botonAnadirPrioridad = document.getElementById('anadirPrioridad');
        this.botonEliminarPrioridad = document.getElementById('eliminarPrioridad');

        // Inicializamos eventos
        this._inicializarEventos();
    }

    // Inicializar eventos de los botones
    _inicializarEventos() {
        this.botonAnadirTarea.addEventListener('click', () => this._agregarTarea());
        this.botonEliminarTarea.addEventListener('click', () => this._eliminarTarea());
        this.botonAnadirPrioridad.addEventListener('click', () => this._agregarTareaConPrioridad());
        this.botonEliminarPrioridad.addEventListener('click', () => this._eliminarTareaConPrioridad());
    }

    // Añadir tarea normal
    _agregarTarea() {
        const tarea = this.tareaInput.value.trim();
        this.mensajeTareasNormales.textContent = "";

        if (!tarea) {
            this.mensajeTareasNormales.textContent = "Por favor, escribe una tarea";
            return;
        }

        const mensajeError = this.tareasNormales.agregarTarea(tarea);
        if (mensajeError) {
            this.mensajeTareasNormales.textContent = mensajeError;
        } else {
            this.tareaInput.value = "";
            this.actualizarTablaTareasNormales();
        }
    }

    // Eliminar tarea normal
    _eliminarTarea() {
        this.mensajeTareasNormales.textContent = "";
        const mensajeError = this.tareasNormales.eliminarTarea();
        if (mensajeError) {
            this.mensajeTareasNormales.textContent = mensajeError;
        } else {
            this.actualizarTablaTareasNormales();
        }
    }

    // Añadir tarea con prioridad
    _agregarTareaConPrioridad() {
        const tarea = this.prioridadInput.value.trim();
        const prioridad = parseInt(this.prioridadValor.value, 10);
        this.mensajeTareasPrioridad.textContent = "";

        if (!tarea || isNaN(prioridad) || prioridad < 0 || prioridad > 9) {
            this.mensajeTareasPrioridad.textContent = "Por favor, escribe una tarea y una prioridad válida";
            return;
        }

        const mensajeError = this.tareasConPrioridad.agregarTarea(tarea, prioridad);
        if (mensajeError) {
            this.mensajeTareasPrioridad.textContent = mensajeError;
        } else {
            this.prioridadInput.value = "";
            this.prioridadValor.value = "";
            this.actualizarTablaTareasConPrioridad();
        }
    }

    // Eliminar tarea con mayor prioridad
    _eliminarTareaConPrioridad() {
        this.mensajeTareasPrioridad.textContent = "";
        const mensajeError = this.tareasConPrioridad.eliminarTarea();
        if (mensajeError) {
            this.mensajeTareasPrioridad.textContent = mensajeError;
        } else {
            this.actualizarTablaTareasConPrioridad();
        }
    }

    // Actualizar tabla de tareas normales
    actualizarTablaTareasNormales() {
        this.tablaTareas.innerHTML = "";
        const tareas = this.tareasNormales.obtenerTareas();
        tareas.forEach(tarea => {
            const fila = document.createElement('tr');
            const celda = document.createElement('td');
            celda.textContent = tarea;
            fila.appendChild(celda);
            this.tablaTareas.appendChild(fila);
        });
    }

    // Actualizar tabla de tareas con prioridad
    actualizarTablaTareasConPrioridad() {
        this.tablaTareasPrioridad.innerHTML = "";
        const tareas = this.tareasConPrioridad.obtenerTareas();
        tareas.forEach(({ tarea, prioridad }) => {
            const fila = document.createElement('tr');
            const celdaTarea = document.createElement('td');
            const celdaPrioridad = document.createElement('td');
            celdaTarea.textContent = tarea;
            celdaPrioridad.textContent = prioridad;
            fila.appendChild(celdaTarea);
            fila.appendChild(celdaPrioridad);
            this.tablaTareasPrioridad.appendChild(fila);
        });
    }
}