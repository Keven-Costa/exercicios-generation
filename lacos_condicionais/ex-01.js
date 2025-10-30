const scanner = require( 'readline-sync' )

let valueA = scanner.questionInt( `Digite o número A: ` )
let valueB = scanner.questionInt( `Digite o número B: ` )
let valueC = scanner.questionInt( `Digite o número C: ` )

let sumAMoreThanC = ( valueA + valueB ) > valueC ? true : false
let sumALessThanC = ( valueA + valueB ) < valueC ? true : false
let sumAEqualToC = ( valueA + valueB ) == valueC ? true : false
let result = valueA + valueB

if ( sumAMoreThanC) {
    console.log( `${ valueA } + ${ valueB } = ${ result } > ${ valueC }` )
    console.log( `A soma A + B é Maior que o C` )

} else if ( sumALessThanC )  {
    console.log( `${ valueA } + ${ valueB } < ${ result } = ${ valueC}` )
    console.log( `A soma A + B é Menor que o C` )

} else if ( sumAEqualToC ){
    console.log( `${ valueA } + ${ valueB } = ${ result }` )
    console.log( `A soma A + B é Igual que o C` )
}