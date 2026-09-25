function menuVerTareas() {
    console.log("---------------------------------------- \n");
        console.log("Que tareas deseas ver?"); //menu ver tareas
        console.log("[1] Todas\n"+
            "[2] Pendientes\n"+
            "[3] En curso\n"+
            "[4] Completadas\n"+
            "[0] Salir\n"
        );
        console.log("---------------------------------------- \n");
}

function preguntarDetalle() {
    console.log("Desea ver el detalle de alguna tarea?\n");
    console.log("Ingrese el ID de la tarea que desea ver o 0 para salir\n");
} 

function menuPrincipal() {
    console.log("---------------------------------------- \n");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver mis Tareas\n"+
        "[2] Agregar una Tarea\n"+
        "[3] Buscar una Tarea\n"+
        "[4] Salir\n"
    );
    console.log("---------------------------------------- \n");
}

import type { Tarea } from "../modelo/tareas";

function mostrarDetalles(tareaEncontrada: Tarea) {
    console.log("---------------------------------------- \n");
    console.log("Detalles de la tarea: \n");
    console.log("ID: " + tareaEncontrada.ID + "\n" +
        "Título: " + tareaEncontrada.Titulo + "\n" +
        "Descripción: " + tareaEncontrada.Descripcion + "\n" +
        "Estado: " + tareaEncontrada.Estado + "\n" +
        "Vencimiento: " + tareaEncontrada.Vencimiento + "\n" +
        "Creación: " + tareaEncontrada.Creacion + "\n" +
        "Dificultad: " + tareaEncontrada.Dificultad + "\n");
}