/******************************************************************/
/*                         TALLERMODULO.JS                        */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

import { Cola } from '../clases/cola.js';  // Importamos la clase Cola

export class Taller {
    constructor() {
        this.cola = new Cola();  // Crear una instancia de la cola
        this.vehiculosConEmoticonos = {
            "Vagón de tranvía": "🚋",
            "Coche antiguo": "🚗",
            "Taxi": "🚖",
            "Autobús": "🚌",
            "Moto": "🏍️",
            "Bicicleta": "🚲",
            "Caravana": "🚐"
        };
        this.tablaColaTaller = document.getElementById('tablaColaTaller');
        this.mensajeTaller = document.getElementById('mensajeTaller');
        this.vehiculoSelect = document.getElementById('vehiculoTaller');
        this.botonGuardar = document.getElementById('guardarVehiculo');
        this.botonAtender = document.getElementById('atenderVehiculo');

        // Inicializar eventos
        this._inicializarEventos();
    }

    // Inicializar los eventos de los botones
    _inicializarEventos() {
        this.botonGuardar.addEventListener('click', () => this.llegaVehiculo());
        this.botonAtender.addEventListener('click', () => this.atiendoVehiculo());
    }

    // Función para añadir un vehículo a la cola
    llegaVehiculo() {
        const vehiculo = this.vehiculoSelect.value;

        if (vehiculo === "") {
            this.mensajeTaller.textContent = "Por favor, selecciona un vehículo";
            return;
        }

        // Intentamos añadir el vehículo a la cola
        const mensajeError = this.cola.llega(vehiculo);
        if (mensajeError) {
            this.mensajeTaller.textContent = mensajeError;
        } else {
            this.vehiculoSelect.value = "";  // Limpiar la selección
            this.mensajeTaller.textContent = "";  // Limpiar los mensajes previos
            this.actualizarTabla();  // Actualizar tabla
        }
    }

    // Función para atender arreglar el primer vehículo de la cola
    atiendoVehiculo() {
        const vehiculoAtendido = this.cola.atiendo();
        if (vehiculoAtendido === "No hay más vehículos que reparar") {
            this.mensajeTaller.textContent = vehiculoAtendido;
        } else {
            const siguienteVehiculo = this.cola.siguiente();
            if (siguienteVehiculo) {
                this.mensajeTaller.textContent = `El siguiente vehículo a reparar es: ${siguienteVehiculo}`;
            } else {
                this.mensajeTaller.textContent = "No hay más vehículos que reparar";
            }
            this.actualizarTabla();  // Actualizar tabla
        }
    }

    // Función para actualizar la tabla con los vehículos en espera
    actualizarTabla() {
        this.tablaColaTaller.innerHTML = "";  // Limpiar la tabla antes de actualizar

        const vehiculos = this.cola.obtenerContenido();
        vehiculos.forEach(vehiculo => {
            const fila = document.createElement('tr');
            const celda = document.createElement('td');
            celda.textContent = `${this.vehiculosConEmoticonos[vehiculo]} ${vehiculo}`;
            fila.appendChild(celda);
            this.tablaColaTaller.appendChild(fila);
        });
    }
}