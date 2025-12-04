//Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// 1.O programa deverá solir ao usuário, 
// 2.que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array.
// 3. Em seguida, faça o que se pede:
// 4.Mostre na tela todas as cores adicionadas. 
// 6.Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
 
import * as readline from "readline-sync";

//Array de cores
let cores: string[] = [];

//Entrada de 5 cores pelo usuário
for (let i = 0; i < 5; i++) {
    let cor = readline.question('Digite uma cor: ');
    cores.push(cor);

}

//Mostra todas as cores adicionadas
console.log("\nListar todas as cores:");
cores.forEach(c => console.log(c));


//Mostra todas as cores ordenadas em orde crescente
console.log("\nOrdenar as cores:");
let coresOrdenadas = [...cores].sort();
coresOrdenadas.forEach(c => console.log(c));


