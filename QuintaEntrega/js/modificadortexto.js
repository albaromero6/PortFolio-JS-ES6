/******************************************************************/
/*                        MODIFICADORTEXTO.JS                     */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

let invertalo = null; // Variable para almacenar el intervalo
let intervalTime = 3000; // Tiempo inicial en milisegundos (Modo normal: 3 segundos)

// Función para convertir todo el texto a mayúsculas
function toUpperCase(text) {
    return text.toUpperCase();
}

// Función para convertir todo el texto a minúsculas
function toLowerCase(text) {
    return text.toLowerCase();
}

// Función para poner en mayúsculas la primera letra de cada palabra
function uppercaseFirstLetter(text) {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Función para poner en mayúsculas la última letra de cada palabra
function uppercaseLastLetter(text) {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, -1) + words[i].charAt(words[i].length - 1).toUpperCase();
    }
    return words.join(' ');
}

// Función para poner en minúscula la primera letra de cada palabra
function lowercaseFirstLetter(text) {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Función para poner en minúscula la última letra de cada palabra
function lowercaseLastLetter(text) {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, -1) + words[i].charAt(words[i].length - 1).toLowerCase();
    }
    return words.join(' ');
}

// Función para poner todas las vocales en mayúsculas
function uppercaseVowels(text) {
    return text.replace(/[aeiou]/g, function(match) {
        return match.toUpperCase();
    });
}

// Función para poner todas las vocales en minúsculas
function lowercaseVowels(text) {
    return text.replace(/[AEIOU]/g, function(match) {
        return match.toLowerCase();
    });
}

// Función para poner todas las consonantes en mayúsculas
function uppercaseConsonants(text) {
    return text.replace(/[bcdfghjklmnpqrstvwxyz]/g, function(match) {
        return match.toUpperCase();
    });
}

// Función para poner todas las consonantes en minúsculas 
function lowercaseConsonants(text) {
    return text.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, function(match) {
        return match.toLowerCase();
    });
}

// Función principal para manejar la transformación según el botón presionado
function transformText(action, text) {
    let result;

    switch (action) {
        case 'uppercase':
            result = toUpperCase(text);
            break;
        case 'lowercase':
            result = toLowerCase(text);
            break;
        case 'uppercaseFirst':
            result = uppercaseFirstLetter(text);
            break;
        case 'uppercaseLast':
            result = uppercaseLastLetter(text);
            break;
        case 'lowercaseFirst':
            result = lowercaseFirstLetter(text);
            break;
        case 'lowercaseLast':
            result = lowercaseLastLetter(text);
            break;
        case 'uppercaseVowels':
            result = uppercaseVowels(text);
            break;
        case 'lowercaseVowels':
            result = lowercaseVowels(text);
            break;
        case 'uppercaseConsonants':
            result = uppercaseConsonants(text);
            break;
        case 'lowercaseConsonants':
            result = lowercaseConsonants(text);
            break;
        default:
            result = "Acción no válida";
            break;
    }
    return result;
}

// Nueva función para manejar el botón y mostrar el resultado en el textarea
function transformAndDisplay(action) {
    const textareas = document.querySelectorAll(".texto"); // Obtener todos los textareas

    // Procesar cada textarea
    textareas.forEach((textarea) => {
        const inputText = textarea.value; // Obtener el texto del textarea
        const result = transformText(action, inputText); // Transformar el texto
        textarea.value = result; // Actualizar el textarea con el texto transformado
    });
}

// Nueva función para obtener texto de la API
async function getTextFromAPI() {
    const textareas = document.querySelectorAll(".texto");
    const imageElement = document.getElementById("characterImage"); // Obtener el elemento de imagen por ID

    try {
        const response = await fetch('https://rickandmortyapi.com/api/character'); // Obtener todos los personajes
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json(); // Obtener los datos en formato JSON
        
        // Elegir un personaje aleatoriamente
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const apiText = data.results[randomIndex].name; // Obtener el nombre del personaje
        const apiImage = data.results[randomIndex].image; // Obtener la imagen del personaje
        
        // Procesar cada textarea y mostrar el texto recibido
        textareas.forEach((textarea) => {
            textarea.value = apiText; // Actualizar el textarea con el texto de la API
        });

        // Mostrar la imagen del personaje
        imageElement.src = apiImage; // Establecer la fuente de la imagen
        imageElement.alt = apiText; // Añadir texto alternativo
        imageElement.style.display = 'block'; // Mostrar la imagen
    } catch (error) {
        console.error('Error al obtener el texto de la API:', error);
    }
}


// Función para aumentar la velocidad del modo aleatorio (1 segundo)
function increaseSpeed() {
    if (invertalo) {
        clearInterval(invertalo); // Detiene el intervalo actual
        intervalTime = 1000; // Cambia el tiempo a 1 segundo
        startRandomTransform(); // Reinicia el intervalo con el nuevo tiempo
    }
}

// Función para disminuir la velocidad del modo aleatorio (5 segundos)
function decreaseSpeed() {
    if (invertalo) { 
        clearInterval(invertalo); // Detiene el intervalo actual
        intervalTime = 5000; // Cambia el tiempo a 5 segundos
        startRandomTransform(); // Reinicia el intervalo con el nuevo tiempo
    }
}

// Función para iniciar la transformación aleatoria (inicia con 3 segundos por defecto)
function startRandomTransform() {
    const actions = ['uppercase', 'lowercase', 'uppercaseFirst', 'uppercaseLast', 'lowercaseFirst', 
        'lowercaseLast', 'uppercaseVowels', 'lowercaseVowels', 'uppercaseConsonants', 'lowercaseConsonants'];

    // Detenemos cualquier intervalo existente antes de crear uno nuevo
    if (invertalo) {
        clearInterval(invertalo);
    }

    // Intervalo que ejecutará la transformación cada X segundos 
    invertalo = setInterval(() => {
        // Selecciona una acción aleatoria del array
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        // Llama a la función que transforma y muestra el texto en el textarea
        transformAndDisplay(randomAction);
    }, intervalTime); // Cambia cada X segundos
}

// Función para detener la transformación aleatoria
function stopRandomTransform() {
    if (invertalo) { 
        clearInterval(invertalo); // Detiene el intervalo
        invertalo = null; // Resetea el ID del intervalo
    }
}
