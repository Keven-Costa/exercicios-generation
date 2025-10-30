const scanner = require( 'readline-sync' )

let number = scanner.questionInt( `Digite o número: ` )

let positiveNumber, negativeNumber, neutralNumber

positiveNumber = number > 0 ? true : false
negativeNumber = number < 0 ? true : false
neutralNumber = number == 0 ? true : false

if ( positiveNumber ) {
    console.log( `O número ${number} é positivo!` )

} else if ( negativeNumber ) {
    console.log( `O número ${number} é negativo!` )

} else if ( neutralNumber ) {
    console.log( `O número ${number} é neutro!` )
}