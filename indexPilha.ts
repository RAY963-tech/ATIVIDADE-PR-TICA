import * as readlineSync from "readline-sync";
import { Stack } from "./Stack";

function main() {
    const Pilha = new Stack<string>();
    let opcao: number;

do {
    console.log("\nMenu:");
    console.log("1 - Adicionar Livro");
    console.log("2 - Listar Livro");
    console.log("3 - Retirar Livro");
    console.log("0 - Finalizar Programa");

opcao = Number(readlineSync.question("\nDigite uma opção: "));

switch (opcao) {
    case 1:
        const livro = readlineSync.question("Digite o nome: ");
        Pilha.push(livro);
        console.log("\nPilha: ");
        Pilha.printStack();
        console.log("\nLivro adicionado!");
        break;

        case 2:
            console.log("\nLista de livros na Pilha:");
            Pilha.printStack();
            break;

            case 3:
                const retirado = Pilha.pop();
                if (retirado) {
                    console.log("\nPilha: ");
                    Pilha.printStack();
                    console.log("\nUm Livro foi retirado da pilha!");
    
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
 
