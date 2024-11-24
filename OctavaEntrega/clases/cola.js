/******************************************************************/
/*                             COLA.JS                            */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

export class Cola {
    constructor() {
        this.vehiculos = [];
        this.maximo = 10;  // Límite de vehículos en la cola
    }

    llega(vehiculo) {
        if (this.vehiculos.length < this.maximo) {
            this.vehiculos.push(vehiculo);
            return null;  // Se ha añadido correctamente
        }
        return "El taller está completo, empieza a reparar";  // Cola llena
    }

    atiendo() {
        if (this.vehiculos.length === 0) {
            return "No hay más vehículos que reparar";  // No hay vehículos en la cola
        }
        return this.vehiculos.shift();  // Retirar el primer vehículo
    }

    siguiente() {
        return this.vehiculos.length > 0 ? this.vehiculos[0] : null;
    }

    estaLlena() {
        return this.vehiculos.length >= this.maximo;
    }

    obtenerContenido() {
        return this.vehiculos;
    }
}