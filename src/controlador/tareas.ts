const prompt = require('prompt-sync')();
const { Tareas, buscarID} = require("./modelo/tareas.js");
import type { Tarea, Estado } from "../modelo/tareas";
const { menuPrincipal, menuVerTareas, preguntarDetalle, mostrarDetalles} = require("./vista/tareas.js");

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

function verTareas(Tareas: Tarea[]): void {
    let idsMostrados: number[] = [];
    let op: number;
    do{
        menuVerTareas();
        op = parseInt(prompt());

        switch (op) {
            case 1:
                console.log("Todas las tareas: \n");
                for(let i=0; i<Tareas.length; i++){
                    console.log("[" + Tareas[i].ID + "]" + Tareas[i].Titulo + "\n");
                    idsMostrados.push(Tareas[i].ID);
                }
                verDetalles(Tareas, idsMostrados);
              break;
            case 2:
                idsMostrados = mostrarPorEstado(Tareas, "P");
                verDetalles(Tareas, idsMostrados);
                break;
            case 3:
                idsMostrados = mostrarPorEstado(Tareas, "E");
                verDetalles(Tareas, idsMostrados);
                break;
            case 4:
                idsMostrados = mostrarPorEstado(Tareas, "C");
                verDetalles(Tareas, idsMostrados);
                break;
            case 0:
                console.log("Saliendo...");
                break;  
            default:
                console.log("Opción no válida");
        } 
    }while (op !== 0);  
}

function mostrarPorEstado(Tareas: Tarea[], estado: Estado): number[] {
    let idsMostrados: number[] = [];
    for (let i: number = 0; i < Tareas.length; i++) {
        if (Tareas[i].Estado === estado) {
            console.log(Tareas[i].Titulo);
            idsMostrados.push(Tareas[i].ID);
        }
    }
    return idsMostrados;
}

function verDetalles(Tareas: Tarea[], idsMostrados: number[]): void {
    let aux: number;
    do {
        preguntarDetalle();
        aux = parseInt(prompt());
    } while (aux !== 0 && aux > idsMostrados.length);
    if (aux !== 0) {
        let tareaEncontrada = buscarID(Tareas, aux, idsMostrados);   
        if (tareaEncontrada !== undefined) {
        Detalles(tareaEncontrada);
    } else {
        console.log("No se encontró la tarea.");
    }
    } else {
        console.log("Saliendo...");
    }
}

function Detalles(tareaEncontrada: Tarea): void {
    mostrarDetalles(tareaEncontrada);
    let aux2;
    do{
        console.log("Desea editar algo de la tarea?\n");
        console.log("[1] si" + "[0] no\n");
        aux2 = parseInt(prompt());
    }while (aux2 !== 0 && aux2 !== 1);
    if(aux2 === 1){
        editarTarea(tareaEncontrada);
    }
}




module.exports = { iniciarApp };