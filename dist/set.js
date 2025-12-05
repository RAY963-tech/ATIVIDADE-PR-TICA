"use strict";
//Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, 
// que ele digite via teclado 10 valores inteiros não repetidos e
//  adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 
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
// Criação do set de números
let numeros = new Set();
console.log("Digite 10 números inteiros (não repetidos):");
//Loop até que o set tenha 10 elementos únicos
while (numeros.size < 10) {
    let numero = parseInt(readline.question('Número ${nummerosSet.si + 1}: '));
    //Verificar se o número já existe no seu Set
    if (numeros.has(numero)) {
        console.log("Número já existe! Digite outro número.");
    }
    else {
        numeros.add(numero);
    }
}
//Mostra todos os elementos do set
console.log("\nListar dados do Set:");
numeros.forEach(num => console.log(num));
