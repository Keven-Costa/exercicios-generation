import { Queue } from '../classes/Queue';
import readlinesync = require( "readline-sync" );

const queue = new Queue<String>();
let entradaUsuario: number


let desejaContinuar = true

while ( desejaContinuar ) {
    console.log( "\n********************************************************" )
    console.log( "1 - Adicionar Clientes na Fila" )
    console.log( "2 - Listar todos os Clientes" )
    console.log( "3 - Retirar Clientes da Fila" )
    console.log( "0 - Sair" )
    console.log( "********************************************************\n" )

    entradaUsuario = readlinesync.questionInt( "Entre com a opção desejada: " )
    console.log()

    switch ( entradaUsuario ) {
        case 1:
            let nome:string = readlinesync.question( "Digite o nome: " )
            console.log()
            queue.enqueue( nome )

            console.log( "Fila: " )
            queue.printQueue()
            console.log()
            console.log( "Cliente Adicionado!" )
            break;
        case 2:
            console.log( "Lista de Clientes na Fila:\n" )
            queue.printQueue()
            break;

        case 3:
            queue.dequeue()
            console.log()
            queue.printQueue()
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



