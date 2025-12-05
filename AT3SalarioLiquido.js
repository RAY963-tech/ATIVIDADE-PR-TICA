const readline = require("readline-sync");

let  salarioBruto = 2000.00;

let  adicionalNoturno = 500.00;

let horasExtras = 100.00;

let  descontos = 200.00;

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("SalarioBruto : " + salarioBruto.toFixed(2));
console.log("Adicional Noturno: " + adicionalNoturno.toFixed(2));
console.log("Horas Extras: " + (horasExtras * 5).toFixed(2));
console.log("Descontos: " + descontos.toFixed(2));
console.log("Salario Liquido: " + salarioLiquido.toFixed(2));