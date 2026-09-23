
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

function buscarID(Tareas: Tarea[], aux: number, idsMostrados: number[]): Tarea | undefined {
    let esValido: boolean = false;
    let tareaEncontrada: Tarea | undefined;
    for (let i: number = 0; i < idsMostrados.length; i++) {
        if (idsMostrados[i] === aux) {
            esValido = true;
        }
    }
    if (!esValido) {
        return undefined;
    } else {
        for (let i: number = 0; i < Tareas.length; i++) {
            if (Tareas[i].ID === aux) {
                tareaEncontrada = Tareas[i];
                break;
            }
        }
    }

    return tareaEncontrada;
}
