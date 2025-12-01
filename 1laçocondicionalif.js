const readline = require('readline-sync');

let numero = readline.questionInt("Digite um numero: ");

let tipo;
let sinal;

// Verifica se é par ou ímpar
if (numero % 2 === 0) {
    tipo = "par";
} else {
    tipo = "ímpar";
}

// Verifica se é positivo ou negativo
if (numero >= 0) {
    sinal = "positivo";
} else {
    sinal = "negativo";
}

console.log(`O Número ${numero} é ${tipo} e ${sinal}!`);
