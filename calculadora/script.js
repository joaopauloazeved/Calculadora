const display = document.getElementById("display");

let primeiroNumero = "";
let operador = "";
let segundoNumero = "";


function adicionarNumero(numero) {
    if (operador === "") {
        primeiroNumero += numero;
        display.value = primeiroNumero;
    } else {
        segundoNumero += numero;
        display.value = segundoNumero;
    }
}

function adicionarOperador(op) {
    if (primeiroNumero === "") return; 
    if (segundoNumero !== "") calcular();
    operador = op;
    display.value = operador;
}

function limpar() {
    primeiroNumero = "";
    operador = "";
    segundoNumero = "";
    display.value = "";
}

function calcular() {
    if (primeiroNumero === "" || operador === "" || segundoNumero === "") return;

    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);
    let resultado = 0;

    switch (operador) {
        case "+": resultado = num1 + num2; break;
        case "-": resultado = num1 - num2; break;
        case "*": resultado = num1 * num2; break;
        case "/": resultado = num1 / num2; break;
    }

    display.value = resultado;

   
    primeiroNumero = resultado.toString();
    operador = "";
    segundoNumero = "";
}

