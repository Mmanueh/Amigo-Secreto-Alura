// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = "";

//let nombre = document.querySelector(``);
document.getElementById(`amigo`).removeAttribute(`disabled`);


function agregarAmigo(){
    let nombre = document.getElementById(`amigo`).value;

    if(nombre.length < 2){
        ponerTexto(`resultado`, `Introduzca un nombre valido`);
    }else {
        amigos += (nombre + "<br>");
        console.log(amigos.split("<br>"));
        ponerTexto(`listaAmigos`, amigos);
        limpiarCaja(`amigo`);
    }
}

function sortearAmigo(){
    let posicion = Math.floor(Math.random() * amigos.split("<br>").length)- 1; 
    ponerTexto(`resultado`, `El amigo secreto sorteado es: ` + amigos.split("<br>")[posicion]);
    amigos = "";
    ponerTexto(`listaAmigos`, amigos);
}

function ponerTexto(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja(elemento){
    document.getElementById(elemento).value = "";
}