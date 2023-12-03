const Chance = require('chance');
const chance = new Chance();

const readlineSync = require('readline-sync')

const randomNumber = chance.integer({min: 1, max:100});

console.log("Bienvenido")
console.log("", randomNumber);

let usuarioNum = parseInt(readlineSync.question("Ingrese un numero: "));

while(usuarioNum !== randomNumber){
    if(usuarioNum < randomNumber){
        console.log("Numero demasiado bajo")
        usuarioNum = parseInt(readlineSync.question("Ingrese otro numero: "));
    }else if(usuarioNum > randomNumber){
        console.log("Número demasiado alto")
        usuarioNum = parseInt(readlineSync.question("Ingrese otro numero: "));
    }
}

console.log("Los números coinciden");