/******************************************************************/
/*                             PILA.JS                            */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

export class Pila {
    constructor() {
        this.elementos = [];
        this.maxSize = 10; // Límite de la pila
    }

    introducir(prenda) {
        if (this.elementos.length >= this.maxSize) {
            return "La lavadora está llena";
        }
        this.elementos.push(prenda);
        return null;
    }

    obtener() {
        if (this.elementos.length === 0) {
            return "No hay más prendas para lavar";
        }
        return this.elementos.pop();
    }

    siguiente() {
        if (this.elementos.length > 0) {
            return this.elementos[this.elementos.length - 1]; // Devuelve el último elemento de la pila
        }
        return null;
    }

    estaLlena() {
        return this.elementos.length >= this.maxSize;
    }

    obtenerContenido() {
        return this.elementos;
    }
}