const readline = require("readline-sync");

function calcularDifereca(n1, n2, n3, n4) {
    return (n1 * n2) - (n3 * n4);
}
 let a = readline.questionFloat("Numero 1:");

 let b = readline.questionFloat("Numero 2:");

 let c = readline.questionFloat("Numero 3:");

 let d = readline.questionFloat("Numero 4:");

 let resultado1 = calcularDifereca(a, b, c, d);
 console.log("diferença  (entrada do usuário):" + resultado1.toFixed(1));


 let resultado2 = calcularDifereca(5.0, 6.0, 7.0, 8.0);
 console.log("Diferença (valores fixos): " + resultado2.toFixed(1));
