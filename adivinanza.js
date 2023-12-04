const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroAdivinado < numeroSecreto){
        console.log('El número secreto es mayor ¡Sigue intenando!');
    }else if(numeroAdivinado > numeroSecreto){
        console.log('El numero secreto es menor ¡Sigue intentando!');
    }else{
        console.log('Encontraste el numero secreto, ¡Felicitaciones!');
    }
};

module.exports = {
    generarNumeroAleatorio, 
    verificarAdivinanza
};