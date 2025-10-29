const scanner = require( 'readline-sync' )
let numeros = [], calculo

for ( let i = 0; i < 4; i++ ) {
    numeros[i] = scanner.questionFloat( `Digite o número ${ i + 1 }: ` )   
}

calculo = ( numeros[0] * numeros[1] ) - ( numeros[2]  * numeros[3] )

console.log(calculo)