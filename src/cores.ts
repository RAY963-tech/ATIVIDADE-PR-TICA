import * as readline from "readline";

// Interface para ler dados do teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cores: string[] = [];
let contador = 0;

function perguntarCor() {
  rl.question(`Digite a cor ${contador + 1}: `, (cor) => {
    cores.push(cor);
    contador++;

    if (contador < 5) {
      perguntarCor();
    } else {
      mostrarResultados();
      rl.close();
    }
  });
}

function mostrarResultados() {
  console.log("\nListar todas as cores:");
  cores.forEach((c) => console.log(c));

  console.log("\nOrdenar as cores:");
  const ordenadas = [...cores].sort();
  ordenadas.forEach((c) => console.log(c));
}

