const readlineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingrese un numero: ');
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenidos!');
    console.log('¡Ingrese un numero e intente adivinar el numero secreto, el numero secreto se encuentra dentro del 1 al 100, Suerte!');
    console.log('',numeroSecreto)

    while(numeroAdivinado !== numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();



















// const Chance = require('chance');
// const chance = new Chance();

// const readlineSync = require('readline-sync')

// const randomNumber = chance.integer({min: 1, max:100});

// console.log("Bienvenido")
// console.log("", randomNumber);

// let usuarioNum = parseInt(readlineSync.question("Ingrese un numero: "));

// while(usuarioNum !== randomNumber){
//     if(usuarioNum < randomNumber){
//         console.log("Numero demasiado bajo")
//         usuarioNum = parseInt(readlineSync.question("Ingrese otro numero: "));
//     }else if(usuarioNum > randomNumber){
//         console.log("Número demasiado alto")
//         usuarioNum = parseInt(readlineSync.question("Ingrese otro numero: "));
//     }
// }

// console.log("Los números coinciden");