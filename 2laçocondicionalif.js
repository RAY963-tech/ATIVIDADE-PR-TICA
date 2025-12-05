
/*Desenvolva um algoritmo que leia 3 valores inteiros A, 
B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.*/
const readline = require("readline-sync");


let A = readline.questionInt("Digite o valor de A: ");
let B = readline.questionInt("Digite o valor de B: ");
let C = readline.questionInt("Digite o valor de C: ");

let soma = A + B;

console.log(`${A} + ${B} = ${soma}`);

if (soma > C) {
    console.log(`${soma} > ${C}`);
    console.log("A soma de A + B é maior que C.");

} else if (soma < C) {
    console.log(`${soma} < ${C}`);
    console.log("A soma de A +B é menor que C.");

} else {

console.log(`${soma} = ${C}`);
console.log("A soma de A + B é igual a C.");

}

