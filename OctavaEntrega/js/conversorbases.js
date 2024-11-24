/******************************************************************/
/*                         CONVERSORBASES.JS                      */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

function convertir() {

    const num = parseInt(document.getElementById("num1").value); // Obtener el número
    if (isNaN(num)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Convertir a las distintas bases
    const binario = num.toString(2);
    const octal = num.toString(8); 
    const hexadecimal = num.toString(16).toUpperCase();

    // Mostrar resultados
    document.getElementById("resultadoBinario").innerText = "Binario: " + binario;
    document.getElementById("resultadoOctal").innerText = "Octal: " + octal;
    document.getElementById("resultadoHexadecimal").innerText = "Hexadecimal: " + hexadecimal;
}