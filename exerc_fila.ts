import { Queue } from "./queue";
import leia = require('readline-sync')

const fila = new Queue<string>()
let continuar = true
let opcao: number

do {
console.log("**************************************************");
console.log("                   1 - Adicionar Cliente na Fila");
console.log("                   2 - Listar todos os Clientes");
console.log("                   3 - Retirar Cliente da Fila");
console.log("                   0 - Sair");
console.log("");
console.log("**************************************************");

    opcao = leia.questionInt("Digite a opcao desejada: ")

    switch(opcao) {
    case 1: 
    let nome: string = leia.question('Digite o nome do cliente: ')
    fila.enqueue(nome)
    console.log('**********************************************')
    console.log('Cliente adicionado! ')
    break;

    case 2:
        if (fila.isEmpty()){
            console.log('Não ha ninguem na fila. ');
        } else {

        console.log('Nomes na lista: ')
        console.log('**************************')
        fila.printQueue()
        }
        break;
        

    case 3:
        if (fila.isEmpty()){
            console.log('Nao ha ninguem na fila. ')
        } else{
            console.log('Sua vez: ' + fila.dequeue())
            console.log('Próximos a serem atendidos: ')
            fila.printQueue()
        }
        break;

    case 0:
        console.log('Obrigado por nos escolher :)')
        continuar = false
        break;
    
        default:
            console.log('Opcao invalida')

        }
} while(continuar)




