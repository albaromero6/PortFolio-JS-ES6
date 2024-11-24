/******************************************************************/
/*                            TAREAS.JS                           */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

// Clase para manejar las tareas normales
export class TareasNormales {
    constructor() {
        this.tareas = [];
        this.maxTareas = 10;
    }

    agregarTarea(tarea) {
        if (this.tareas.length >= this.maxTareas) {
            return "Se te han acumulado, empieza a hacer tareas";
        }
        this.tareas.splice(Math.floor(Math.random() * (this.tareas.length + 1)), 0, tarea);
        return null;
    }

    eliminarTarea() {
        if (this.tareas.length === 0) {
            return "No quedan tareas por hacer";
        }
        this.tareas.splice(Math.floor(Math.random() * this.tareas.length), 1);
        return null;
    }

    obtenerTareas() {
        return this.tareas;
    }
}

// Clase para manejar las tareas con prioridad
export class TareasConPrioridad {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea, prioridad) {
        if (isNaN(prioridad) || prioridad < 0 || prioridad > 9) {
            return "Por favor, escribe una tarea y una prioridad válida";
        }
        this.tareas.push({ tarea, prioridad });
        this.tareas.sort((a, b) => b.prioridad - a.prioridad);
        return null;
    }

    eliminarTarea() {
        if (this.tareas.length === 0) {
            return "No quedan tareas por hacer";
        }
        this.tareas.shift();
        return null;
    }

    obtenerTareas() {
        return this.tareas;
    }
}