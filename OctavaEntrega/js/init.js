/******************************************************************/
/*                             INIT.JS                            */
/*                           ALBA ROMERO                          */
/*                              2 DAW                             */
/******************************************************************/

"use strict";

import { initPila } from '../modulos/pilaModulo.js';
import { Taller } from '../modulos/tallerModulo.js'; 
import { TareasApp } from '../modulos/tareasModulo.js';

document.addEventListener('DOMContentLoaded', () => {
    initPila();
});

document.addEventListener('DOMContentLoaded', function () {
    new Taller();  
});

document.addEventListener('DOMContentLoaded', () => {
    new TareasApp();
});