//VARIABLES BASICAS 
var aborde = document.getElementById("speech")
var cliente = document.getElementById("answer")
var customerAnswer = false


//VARIABLES CON FUNCIONES 

var goodSpeech = function niceRethoric(aborde) {
    if (aborde.length == 50) {
        alert("Joder que bien haces esto")
        customerAnswer = true
    }
}
var badSpeech = function badRethoric(aborde) {
    if (aborder.length <= 20) {
        alert("No gracias")
        customerAnswer = false
    }
}



//Funcion del Speech
function printSpeech(speech) {
    alert(speech.value + " Este es tu speech que creativo")
}

//Funcion de las causas 
function ForWhy(causes) {
    alert(causes.value + " Tu Causa es Noble")
}

//Funcion de las respuestas del cliente
function printAnswer(customerAnswer) {
    if (customerAnswer == true) {
        alert("Esta Convencido En Apoyarte!!")
    } else {
        alert("Sigue Intentandolo, Mejorando Y Andando")
    }
}