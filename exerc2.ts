import leia = require('readline-sync')
//array tipo number
//cenario 1: iniciar com 10 valores inteiros
//cenario 2: usuario digitar 1 numero, exibir a posicao do numero na coleção
//cenario 3: se o numero n estiver, informar q o numero n foi encontrado

let listaNumber: Array<number> = new Array<number>(12, 24, 13, 54, 15, 6, 87, 81, 91, 14);
let numeroProcurado 
let posicao

console.log("Lista de numeros: ", listaNumber);

numeroProcurado = leia.questionInt("Digite o numero que voce quer encontrar ");
posicao = listaNumber.indexOf(numeroProcurado);

if (posicao !== -1) {
    console.log(`O número ${numeroProcurado} foi encontrado na posição ${posicao}.`);
} else {
    console.log(`O número ${numeroProcurado} não foi encontrado!`);
}
