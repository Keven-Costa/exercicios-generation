const scanner = require( "readline-sync" )  

let number, averageOfMultiplesOfThree = 0
let countOfEnteredNumbers = 0

do {
    number = scanner.questionInt( "Digite um número: " )
    

    if ( number % 3 == 0 ) {
        averageOfMultiplesOfThree += number
        countOfEnteredNumbers += 1   
    }
    
} while ( number != 0 );
averageOfMultiplesOfThree = averageOfMultiplesOfThree / countOfEnteredNumbers
console.log()
console.log( `A média de todos os números múltiplos de 3 é: ${ averageOfMultiplesOfThree }\n` )