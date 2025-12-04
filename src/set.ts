//Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, 
// que ele digite via teclado 10 valores inteiros não repetidos e
//  adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 

import * as readline from "readline-sync";

// Criação do set de números
let numeros: Set<number> = new Set<number>();

console.log("Digite 10 números inteiros (não repetidos):");

//Loop até que o set tenha 10 elementos únicos
while (numeros.size < 10) {
    let numero = parseInt(readline.question('Número ${nummerosSet.si + 1}: '));
    
    //Verificar se o número já existe no seu Set
    if (numeros.has(numero)) {
        console.log("Número já existe! Digite outro número.");

    } else {

        numeros.add(numero);

    }
}
//Mostra todos os elementos do set
console.log("\nListar dados do Set:");
numeros.forEach(num => console.log(num));
