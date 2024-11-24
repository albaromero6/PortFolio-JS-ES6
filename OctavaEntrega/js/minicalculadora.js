/******************************************************************/
/*                        MINICALCULADORA.JS                      */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict"

let resultado = 0; // Variable para guardar el resultado 

function suma() {
    const op1 = parseFloat(document.getElementById("op1").value); 
    const op2 = parseFloat(document.getElementById("op2").value); 
    resultado = op1 + op2; 
    mostrarResultado(); 
}

function resta() {
    const op1 = parseFloat(document.getElementById("op1").value); 
    const op2 = parseFloat(document.getElementById("op2").value); 
    resultado = op1 - op2; 
    mostrarResultado(); 
}

function multiplicacion() {
    const op1 = parseFloat(document.getElementById("op1").value); 
    const op2 = parseFloat(document.getElementById("op2").value); 
    resultado = op1 * op2; 
    mostrarResultado(); 
}

function division() {
    const op1 = parseFloat(document.getElementById("op1").value); 
    const op2 = parseFloat(document.getElementById("op2").value); 

    if (op2 !== 0) { // Comprobar que el segundo operando no sea cero
        resultado = op1 / op2; 
        mostrarResultado(); 
    } else {
        alert("No se puede dividir entre cero"); 
    }
}

function valorEntero() {
    resultado = Math.floor(resultado); // Redondear hacia abajo el resultado
    mostrarResultado(); 
}

function parteDecimal() {
    const parteDecimal = resultado - Math.floor(resultado); // Calcular la parte decimal
    resultado = parteDecimal; 
    mostrarResultado(); 
}

function factorial() {
    const op1 = parseInt(document.getElementById("op1").value); // Obtener el primer operando y convertirlo a entero
    if (op1 < 0) { // Comprobar si el número es negativo
        alert("El factorial no existe para números negativos"); 
        return; 
    }
    resultado = 1; 
    for (let i = 1; i <= op1; i++) { 
        resultado *= i; 
    }
    mostrarResultado(); 
}

function mostrarResultado() {
    document.getElementById("result").innerText = resultado; 
}
