const scanner = require( 'readline-sync' )

let n1, n2, operacao, resultado

n1 = scanner.questionFloat( "Digite o 1º número: " )
n1 = n1.toFixed( 1 )
console.log()

n2 = scanner.questionFloat( "Digite o 2º número: " )
n2 = n2.toFixed( 1 )
console.log()

operacao = scanner.questionInt( "Operação: " ) 
console.log()

switch ( operacao ) {
    case 1:
        resultado =  ( n1 + n2 ).toFixed( 1 )
        console.log( `${ n1 } + ${ n2 } = ${ resultado }\n` )
        break;
    case 2:
        resultado = ( n1 - n2 ).toFixed( 1 )
        console.log( `${ n1 } - ${ n2 } = ${ resultado }\n` )
        break;
    case 3:
        resultado = ( n1 * n2 ).toFixed( 1 )
        console.log( `${ n1 } * ${ n2 } = ${ resultado }\n` )
        break;
    case 4: 
        resultado = ( n1 / n2 ).toFixed( 1 )
        console.log( `${ n1 } / ${ n2 } = ${ resultado }\n` )
        break
    default:
        console.log( "Operação Inválida!" )
        break;
}