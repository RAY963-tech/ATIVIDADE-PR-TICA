const readline = require("readline-sync")

let salario =Number(readline.question("1000.00"));

let abono = Number(readline.question("1000.00"));

let novoSalario = salario  +abono;

console.log("Calculando novo salario...");

console.log("Salario digitado: " + salario);

console.log("Abonno digitado: " + abono);

console.log("Novo salario: " + novoSalario);