"use strict";
//Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// 1.O programa deverá solir ao usuário, 
// 2.que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array.
// 3. Em seguida, faça o que se pede:
// 4.Mostre na tela todas as cores adicionadas. 
// 6.Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
//Array de cores
let cores = [];
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
