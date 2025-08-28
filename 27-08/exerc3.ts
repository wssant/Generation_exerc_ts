import leia = require('readline-sync')
//usuario digitar 10 numeros inteiros 
// caso nao esteja listado, exibir num n encontrado

let listaNumber: Set<number> = new Set<number>([21, 23, 13, 56, 98, 78, 18, 90, 12, 30])
let numero

console.log("Lista de numeros: ", listaNumber)

numero = leia.questionInt("Digite um numero inteiro valido: ")

if (listaNumber.has(numero)) {
    console.log(`O número ${numero} foi encontrado!`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}