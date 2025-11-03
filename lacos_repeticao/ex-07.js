const scanner = require( "readline-sync" )  

let vetor = [ 2, 5, 1, 3, 4, 9, 7, 8, 10, 6 ]
let number = null
let numberIndex = null
let foundNumber = false

number = scanner.questionInt( "Digite o número que você deseja encontrar: " )

for ( let i = 0; i < vetor.length; i++ ) {

    if ( vetor[ i ] === number ) {
        numberIndex = i
        foundNumber = true
        break
    } 
}

if ( foundNumber ) {
    console.log(`O número ${number} está localizado na posição: ${numberIndex}\n`)
} else {
    console.log( `O número ${number} não foi encontrado!\n` )
}



