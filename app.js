// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAgregados = [];

//let nombre = document.querySelector(``);
document.getElementById(`amigo`).removeAttribute(`disabled`);


function agregarAmigo(){
    let nombre = document.getElementById(`amigo`).value;

    if(nombre.length < 2){
        console.log(`Introdusca un nombre valido`)
    }else {
        console.log("amigo agregado");
        nombresAgregados.push(nombre);
    }
}

function sortearAmigo(){

}

function mostrarNombres(){
    
}