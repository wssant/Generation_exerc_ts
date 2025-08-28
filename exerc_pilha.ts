import { Stack } from "./stack";
import leia = require('readline-sync')

const pilha = new Stack<string>()
let continuar = true
let opcao: number

do {
    console.log("*****************************************");
    console.log();
    console.log("      1 - Adicionar Livro na pilha");
    console.log("      2 - Listar todos os Livros");
    console.log("      3 - Retirar Livro da pilha");
    console.log("      0 - Sair");
    console.log();
    console.log("*****************************************");
    console.log();

    opcao = leia.questionInt("Digite a opcao desejada: ")
    
        switch(opcao) {
        case 1: 
        let nome: string = leia.question('Digite o nome do livro: ')
        pilha.push(nome)
        console.log('**********************************************')
        console.log('Livro adicionado! ')
        break;
    
        case 2:
            if (pilha.isEmpty()){
                console.log('Não ha livro nenhum. ');
            } else {
    
            console.log('Lista dos livros: ')
            console.log('**************************')
            pilha.printStack()
            }
            break;
            
    
        case 3:
            if (pilha.isEmpty()){
                console.log('Nao ha livro nenhum. ')
            } else{
                console.log('Livros na lista ' + pilha.pop())
                pilha.printStack()
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
    
