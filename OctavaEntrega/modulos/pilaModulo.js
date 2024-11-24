/******************************************************************/
/*                          PILAMODULO.JS                         */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

import { Pila } from '../clases/pila.js';

export function initPila() {
    const pila = new Pila();
    const form = document.getElementById('cestaColadaForm');
    const mensajeDiv = document.getElementById('mensaje');
    const tablaBody = document.getElementById('tablaCestaColada');
    const guardarBtn = document.getElementById('guardarColada');
    const retirarBtn = document.getElementById('retirarColada');

    // Función para actualizar la tabla
    const actualizarTabla = () => {
        tablaBody.innerHTML = "";
        pila.obtenerContenido().forEach((prenda) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `<td>${prenda}</td>`; // Mostrar el icono y el texto
            tablaBody.appendChild(fila);
        });
    };

    // Evento para añadir prendas
    guardarBtn.addEventListener('click', () => {
        const prendaSelect = document.getElementById('prendaColada');
        const prenda = prendaSelect.value; 
        const prendaConIcono = prendaSelect.options[prendaSelect.selectedIndex].innerText; // Incluye el icono

        if (!prenda) {
            mensajeDiv.textContent = "Selecciona una prenda";
            return;
        }

        const mensaje = pila.introducir(prendaConIcono); // Guardar el texto con el icono
        if (mensaje) {
            mensajeDiv.textContent = mensaje;
        } else {
            mensajeDiv.textContent = `"${prenda}" añadido a la lavadora`;
        }
        actualizarTabla();
    });

    // Evento para retirar prendas
    retirarBtn.addEventListener('click', () => {
        const prenda = pila.obtener();
        if (typeof prenda === "string") {
            mensajeDiv.textContent = prenda; // Mensaje de error
        } else {
            mensajeDiv.textContent = "${prenda}";
        }
        actualizarTabla();
    });
}
