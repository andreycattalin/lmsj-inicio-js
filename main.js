console.log("El mensaje que hemos enviado a la consola");

const title = document.getElementById("title");
title.style.fontSize = "40px";
title.innerHTML = title.innerHTML.toUpperCase();

const inTask = document.getElementById("tarea");
const list = document.getElementById("list")
const buttonAdd = document.getElementById("btnAdd")

buttonAdd.addEventListener("click", addTask)

let misTareas = [
    {
        id: 211,
        tarea: "Tarea 1",
        isDone: false
    },
    {
        id: 2,
        tarea: "Tarea 2",
        isDone: true
    }
]

function addTask() {

    // 1. Coger el valor del input
    const miTarea = inTask.value
    // 2. Agregar el valor al array
    misTareas.push({
        id: parseInt(Math.random() * 1000),
        tarea: miTarea.trim(),
        isDone: false
    })
    console.log(misTareas)
    // 3. Pintar de nuevo la lista
    pintarLista()
    // 4. Limpiar el input
    inTask.value = ""

}

function pintarLista() {
    list.innerHTML = ""

    misTareas.forEach(tarea => {
        if(tarea.isDone) {
            list.innerHTML += `<li class="flex justify-between border-2 bg-green-200 border-green-500 rounded-md p-2">${tarea.tarea}  <button id="btnUpdate-${tarea.id}" class="bg-slate-500 p-2 text-white">Deshacer</button></li>`
        } else {
            list.innerHTML += `<li class="flex justify-between border-2 border-gray-500 rounded-md p-2">${tarea.tarea} <button id="btnUpdate-${tarea.id}" class="bg-green-500 p-2 text-white">Ya está</button></li>`
        }
    })

    for (const tarea of misTareas) {
        document.getElementById(`btnUpdate-${tarea.id}`).addEventListener("click", () => updateTask(tarea.id))
    }

}

function updateTask(id) {
    const tareaSeleccionada = misTareas.find(tarea => tarea.id == id) 
    tareaSeleccionada.isDone = !tareaSeleccionada.isDone
    pintarLista()
}

pintarLista()