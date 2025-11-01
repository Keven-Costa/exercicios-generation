const scanner = require( "readline-sync" )
let vetor = [], pares = [], impares = []
let soma = 0, media = 0
let texto = ""

for ( let i = 0; i < 10; i++ ) {
    vetor[ i ] = scanner.questionInt( `Digite o ${ i + 1}° número: ` )
    
    if ( vetor[ i ] % 2 == 0 ) {
        pares.push( vetor[ i ] )
    } else if ( vetor[i] % 2 == 1 ){
        impares.push( vetor[ i ] )
    }

    soma += vetor[ i ]
}

media = ( soma / vetor.length ).toFixed( 2 )

console.log( "\nElementos nos índices ímpares: \n" )
for ( let i = 0; i < vetor.length; i++ ) {
    if ( i % 2 != 0 ) {
        texto += `${ vetor[ i ] } ` 
    }
}
console.log( `${ texto } \n` )
texto = ""

console.log( `Elementos pares: ` )
for ( let i = 0; i < pares.length; i++ ) {
    texto += `${ pares[ i ] } ` 
}

console.log( `${ texto } \n` )
console.log(`Soma ${ soma }\n`)
console.log( `Média: ${media}\n` )