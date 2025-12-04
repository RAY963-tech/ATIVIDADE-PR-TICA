const input = require('readline-sync');

// Entrada
let nota = input.question("Nome do colaborador: ");
let codigo = parseInt(input.question("Código do cargo (1 a 6): "));
let salario = parseFloat(input.question("Salário: "));

let cargo = "";
let reajuste = 0;

// Switch com código numérico
switch (codigo) {
    case 1:
        cargo = "Gerente";
        reajuste = 0.10;
        break;

    case 2:
        cargo = "Vendedor";
        reajuste = 0.07;
        break;

    case 3:
        cargo = "Supervisor";
        reajuste = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        reajuste = 0.06;
        break;

    case 5:
        cargo = "Estoquista";
        reajuste = 0.05;
        break;

    case 6:
        cargo = "Técnico de TI";
        reajuste = 0.08;
        break;

    default:
        console.log("Código inválido!");
        process.exit(); 
}

// Cálculo 
let novoSalario = salario + (salario * reajuste);

// Saída
console.log(`\nNome do colaborador: ${nota}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${salario.toFixed(2)}`);
console.log(`Reajuste: ${reajuste * 100}%`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
