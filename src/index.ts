
import * as readlineSyns from "readline-sync";

import { Queue } from "./Queue";

function main() {
    const fila = new Queue<string>();
    let opcao: number;

    do {
       console.log("\nMenu:");
        console.log("1 - Adicionar Cliente");
         console.log("2 - Listar Clientes");
          console.log("3 - Chamar Cliente");
           console.log("0 - Finalizar Programa");

           opcao = Number(readlineSyns.question("\nDigite uma opção: "));

              switch (opcao) {
                case 1:
                    const name = readlineSyns.question("Digite o nome :");
                    fila.enqueue(name);
                    console.log("\nFila: ");
                    fila.printQueue();
                    break;

                    case 2:
                        console.log("\nLista de Clientes na Fila: ");
                        fila.printQueue();
                        break;

                    case 3:
                        const chamado = fila.dequeue();
                        if (chamado) {
                            console.log("\nChamando agora: " + chamado);
                            console.log("\nFila Atualizando: ");
                            fila.printQueue();
                        }
                        break;

                    case 0:
                        console.log("\nPrograma Finalizado!");
                        break;


                    default:
                        console.log("\nOpção inválida!\n");
                    }
                } while (opcao !== 0);
            }
         main();
    
