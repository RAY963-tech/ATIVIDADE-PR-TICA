/* esenvolva um algoritmo que simule as operações básicas de uma Conta Bancária.
 O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo
 (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). 
Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação,
exiba o novo Saldo na tela. A variável saldo (número real), será inicializada com o valor de R$ 1000.00.
 Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
*/ 

const readline = require('readline-sync');

let saldo = 1000.00;

// Entrada
let operacao = readline.questionInt("Operação (1-Saldo | 2-Saque | 3-Depósito): ");

// Escolha da operação
switch (operacao) {

    case 1:
        console.log("Operação - Saldo");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    case 2:
        console.log("Operação - Saque");
        let valorSaque = readline.questionFloat("Valor: R$ ");

        if (valorSaque > saldo) {
            console.log("Saldo Insuficiente!");
        } else {
            saldo = saldo - valorSaque;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;

    case 3:
        console.log("Operação - Depósito");
        let valorDeposito = readline.questionFloat("Valor: R$ ");
        saldo = saldo + valorDeposito;
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    default:
        console.log("Operação Inválida!");
        break;
}
