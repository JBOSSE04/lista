let pantalla = document.getElementById('pantalla');
let numeroActual = '';
let numeroPrevio = '';
let operador = '';

function agregarNumero(numero) {
    numeroActual += numero;
    pantalla.textContent = numeroActual;
}

function agregarOperador(simboloOperador) {
    operador = simboloOperador;
    numeroPrevio = numeroActual;
    numeroActual = '';
    pantalla.textContent = numeroPrevio + simboloOperador;
}

function calcular() {
    let resultado = 0;
    switch (operador) {
        case '+':
            resultado = parseFloat(numeroPrevio) + parseFloat(numeroActual);
            break;
        case '-':
            resultado = parseFloat(numeroPrevio) - parseFloat(numeroActual);
            break;
        case '*':
            resultado = parseFloat(numeroPrevio) * parseFloat(numeroActual);
            break;
        case '/':
            resultado = parseFloat(numeroPrevio) / parseFloat(numeroActual);
            break;
    }
    pantalla.textContent = resultado;
    numeroActual = resultado;
    numeroPrevio = '';
    operador = '';
}
