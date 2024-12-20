/******************************************************************/
/*                          EJERCICIOS.JS                         */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict"

const boton = document.getElementById("boton-mostrar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", mostrar);

function mostrar() {
    console.log(`Estoy mostrando el resultado del ${resultado.getAttribute('name')}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute('name')}`;
}