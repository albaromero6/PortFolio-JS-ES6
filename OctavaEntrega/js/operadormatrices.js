/******************************************************************/
/*                       OPERADORMATRICES.JS                      */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

let matrixA = [];
let matrixB = [];
let operationInterval; // Variable para almacenar el intervalo
let intervalDuration = 4000; // Duración inicial de 4 segundos

function generarMatrices() {
    const dimension = document.getElementById("dimension").value;
    const rangoInferior = document.getElementById("rangoInferior").value;
    const rangoSuperior = document.getElementById("rangoSuperior").value;
    
    // Validar campos
    if (dimension === "" || rangoInferior === "" || rangoSuperior === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (isNaN(dimension) || dimension <= 0) {
        alert("Por favor, introduce una dimensión válida.");
        return;
    }

    // Convertir los rangos a números para la comparación
    const lower = parseInt(rangoInferior);
    const upper = parseInt(rangoSuperior);
    
    if (isNaN(lower) || isNaN(upper)) {
        alert("Por favor, introduce valores válidos para el rango.");
        return;
    }

    if (upper <= lower) {
        alert("El rango superior debe ser mayor que el rango inferior.");
        return;
    }

    // Limpiar el contenedor antes de generar nuevas matrices
    clearResults();

    matrixA = createMatrix(dimension, lower, upper);
    matrixB = createMatrix(dimension, lower, upper);

    // Mostrar las matrices A y B en contenedores separados
    displayMatrix(matrixA, "Matriz A", "matrixAContainer");
    displayMatrix(matrixB, "Matriz B", "matrixBContainer");
}

// Función para crear una matriz
function createMatrix(dimension, rangoInferior, rangoSuperior) {
    const dim = parseInt(dimension);
    const lower = parseInt(rangoInferior);
    const upper = parseInt(rangoSuperior);
    return Array.from({ length: dim }, () =>
        Array.from({ length: dim }, () => 
            Math.floor(Math.random() * (upper - lower + 1)) + lower
        )
    );
}

// Función para mostrar la matriz en el contenedor especificado
function displayMatrix(matrix, title, containerId) {
    const container = document.getElementById(containerId);
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    container.appendChild(titleElement);

    const table = document.createElement("table");
    matrix.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    container.appendChild(table);
}

// Sumar matrices
function sumaMatrices() {
    if (!matrixA.length || !matrixB.length) {
        alert("Genera las matrices primero");
        return;
    }
    
    const resultMatrix = matrixA.map((row, i) => 
        row.map((val, j) => val + matrixB[i][j])
    );

    // Limpiar el contenedor de resultados antes de mostrar el nuevo resultado
    clearResults();
    displayMatrix(resultMatrix, "Suma", "operationResult");
}

// Restar matrices
function restaMatrices() {
    if (!matrixA.length || !matrixB.length) {
        alert("Genera las matrices primero");
        return;
    }
    
    const resultMatrix = matrixA.map((row, i) => 
        row.map((val, j) => val - matrixB[i][j])
    );

    // Limpiar el contenedor de resultados antes de mostrar el nuevo resultado
    clearResults();
    displayMatrix(resultMatrix, "Resta", "operationResult");
}

// Multiplicar matrices
function multiplicacionMatrices() {
    if (!matrixA.length || !matrixB.length) {
        alert("Genera las matrices primero");
        return;
    }
    
    const dimension = matrixA.length;
    const resultMatrix = Array.from({ length: dimension }, () => 
        Array(dimension).fill(0)
    );

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            for (let k = 0; k < dimension; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    // Limpiar el contenedor de resultados antes de mostrar el nuevo resultado
    clearResults();
    displayMatrix(resultMatrix, "Multiplicación", "operationResult");
}

// Función para limpiar los resultados
function clearResults() {
    const matrixAContainer = document.getElementById("matrixAContainer");
    const matrixBContainer = document.getElementById("matrixBContainer");
    const operationResult = document.getElementById("operationResult");
    
    matrixAContainer.innerHTML = '';
    matrixBContainer.innerHTML = '';
    operationResult.innerHTML = ''; // Limpiar resultados de operaciones
}

// Generar valores aleatorios para los inputs
function generarValoresAleatorios() {

    const dimension = Math.floor(Math.random() * (6 - 2 + 1)) + 2; // Aleatorio entre 2 y 6
    let rangoInferior, rangoSuperior;

    // Asegurarse de que el rango superior sea mayor que el rango inferior
    do {
        rangoInferior = Math.floor(Math.random() * (6 - 1 + 1)) + 1; // Aleatorio entre 1 y 6
        rangoSuperior = Math.floor(Math.random() * (89 - 7 + 1)) + 7; // Aleatorio entre 7 y 89
    } while (rangoSuperior <= rangoInferior); // Asegurarse de que el rango superior sea mayor

    // Establecer los valores en los inputs
    document.getElementById("dimension").value = dimension;
    document.getElementById("rangoInferior").value = rangoInferior;
    document.getElementById("rangoSuperior").value = rangoSuperior;

    // Generar las matrices
    generarMatrices();
}

function operacionAleatoria() {
    // Limpiar si hay un intervalo existente antes de iniciar uno nuevo
    if (operationInterval) {
        clearInterval(operationInterval);
    }

    // Iniciar un nuevo intervalo
    operationInterval = setInterval(() => {
        const operaciones = [sumaMatrices, restaMatrices, multiplicacionMatrices];
        const randomOperation = operaciones[Math.floor(Math.random() * operaciones.length)];
        
        randomOperation(); // Ejecutar una operación aleatoria
    }, intervalDuration); 
}

// Función para detener las operaciones aleatorias
function detenerOperaciones() {
    clearInterval(operationInterval);
    operationInterval = null; //Vaciar el intervalo
}

// Cambiar la velocidad de las operaciones aleatorias
function cambiarVelocidad(accion) {

    if (accion === 'aumentar') {
        intervalDuration = 2000; // Cambiar a 2 segundos
    } else if (accion === 'disminuir') {
        intervalDuration = 6000; // Cambiar a 6 segundos
    }

    // Reinicio si ya hay un intervalo activo
    if (operationInterval) {
        clearInterval(operationInterval);
        operacionAleatoria(); // Reinicio el intervalo con la nueva duración
    }
}
