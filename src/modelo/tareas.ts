
type Tarea = {
    ID: number;
    Titulo: string;
    Descripcion: string;
    Estado: "P" | "E" | "C";
    Vencimiento: string;
    Creacion: string;
    Dificultad: number;
};

let ID: number = 1;
let Tareas: Tarea[] = [];

function crearTarea(titulo: string, descripcion: string, dificultad: number, estado: "P" | "E" | "C", vencimiento: string): void {
    let nuevaTarea: Tarea = {
        ID:ID++,
        Titulo: titulo,
        Descripcion: descripcion,
        Estado: estado,
        Vencimiento: vencimiento,
        Creacion: new Date().toLocaleDateString(),
        Dificultad: dificultad
    };
    Tareas.push(nuevaTarea);
}

function resolverValor(valorNuevo: string, valorViejo: string): string { //preguntar si esta bien que devuelva un string
    if (valorNuevo === "") {
        return valorViejo;
    } else if (valorNuevo === " ") {
        return "";
    } else {
        return valorNuevo;
    }
}
