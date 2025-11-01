const scanner = require( "readline-sync" )

let numbers = [], evenNumbers = [], oddNumbers = []

for ( let i = 0; i < 10; i++ ) {
    numbers[ i ] = scanner.questionInt( `Digite o ${ i + 1 } ° número:` )

    if ( numbers[ i ] % 2 == 0 ) {
        evenNumbers.push( numbers[ i ] )
    } else {
        oddNumbers.push(numbers[ i ] )
    }
    
}

console.log( `Total de números pares: ${ evenNumbers.length }` )
console.log( `Total de números ímpares: ${ oddNumbers.length }` )