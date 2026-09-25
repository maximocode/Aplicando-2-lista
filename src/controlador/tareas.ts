const prompt = require('prompt-sync')();
const { Tareas} = require("./modelo/tareas.js");
const { verTareas, agregarTarea, buscarTarea } = require("./controlador/tareas.js");
const { menuPrincipal } = require("./vista/tareas.js");

function iniciarApp(): void {
    let op: number;
    do {
     menuPrincipal();
     op = parseInt(prompt());

     switch (op) {
         case 1:
            verTareas(Tareas);
            break;
         case 2:
            agregarTarea();
            break;
         case 3:
            buscarTarea(Tareas);
            break;
         case 4:
            console.log("Saliendo...");
            break;
         default:
            console.log("Opción no válida");
        }
    } while (op !== 4);
} 

module.exports = { iniciarApp };