const questions = [
    {
        question: "¿Qué es el LMSG?",
        answers: [
            "Lenguaje de Marcado de la Lenguaje de Programación",
            "Lenguaje de Programación",
            "El LMSG es un lenguaje de marcado de la lenguaje de programación"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el DAWD?",
        answers: [
            "Dominio de Aplicaciones Web Dinámicas",
            "Dominio de Aplicaciones Web Dinámicas",
            "DAWD es un dominio de aplicaciones web dinámicas"
        ],
        correctAnswer: 2
    }
]

const title = document.getElementById("title");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

let pos = 0

function mostrarQuestion() {
    title.innerHTML = questions[pos].question
    btn1.innerHTML = questions[pos].answers[0]
    btn2.innerHTML = questions[pos].answers[1]
    btn3.innerHTML = questions[pos].answers[2]
}


function responder(respuesta) {
    if(respuesta == questions[pos].correctAnswer) {
        alert("¡Muy bien!")
        pos++
        mostrarQuestion()
    } else {
        alert("No lo sé yo")
    }
}

mostrarQuestion()