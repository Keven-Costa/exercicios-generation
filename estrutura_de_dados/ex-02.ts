import { Stack } from "../classes/Stack";
import readlinesync = require( "readline-sync" );


const stack = new Stack<string>();

let entradaUsuario: number


let desejaContinuar = true

while ( desejaContinuar ) {
    console.log( "\n********************************************************" )
    console.log( "1 - Adicionar Livro na Pilha" )
    console.log( "2 - Listar todos os Livros" )
    console.log( "3 - Retirar Livros da Pilha" )
    console.log( "0 - Sair" )
    console.log( "********************************************************\n" )

    entradaUsuario = readlinesync.questionInt( "Entre com a opção desejada: " )
    console.log()

    switch ( entradaUsuario ) {
        case 1:
            let nome:string = readlinesync.question( "Digite o nome: " )
            console.log()
            stack.push( nome )

            console.log( "Pilha: " )
            stack.printStack()
            console.log()
            console.log( "Livro Adicionado!" )
            break;
        case 2:
            console.log( "Lista de Livros na Pilha:\n" )
            stack.printStack()
            break;

        case 3:
            stack.pop()
            console.log()
            stack.printStack()
            console.log()
            console.log( "Um Livro foi retirado da pilha!")
            break
        case 0:
            console.log( "Programa Finalizado!" )
            break
        default:
            console.log( "Opção invalida\n" )
        break;
    }

    

    desejaContinuar = entradaUsuario != 0 ? true: false
    
}