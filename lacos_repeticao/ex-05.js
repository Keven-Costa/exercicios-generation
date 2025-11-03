const scanner = require( "readline-sync" )  

let number, sumOfPositiveNumbers = 0

do {
    number = scanner.questionInt( "Digite um número: " )

    if ( number > 0 ) {
        sumOfPositiveNumbers += number    
    }
    
} while ( number != 0 );

console.log()
console.log( `A soma dos números positivos é: ${ sumOfPositiveNumbers }\n` )