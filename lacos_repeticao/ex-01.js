const scanner = require( "readline-sync" )

let number1, number2

number1 = scanner.questionInt( "Digite o primeiro número do intervalo: " )
number2 = scanner.questionInt( "Digite o último número do intervalo: " )

if ( number1 > number2 ) {
    console.log( "Intervalo inválido!" )
    return
}

let numbers = []

for ( let i = number1; i < number2; i++ ) {
    numbers.push( i )
}

for ( let i = 0; i < numbers.length; i++ ) {
    if ( numbers[ i ] % 3 == 0 && numbers[ i ] % 5 == 0 ) {
        console.log( `${ numbers[ i ] } é múltiplo de 3 e 5` )
    }
}
