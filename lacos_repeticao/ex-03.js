const scanner = require( "readline-sync" )
let age = 1
let totalNumberOfPeople21 = [], totalNumberOfPeople50 = []


while ( age > 0 ) {
    age = scanner.questionInt( "Digite uma idade: " )

    if ( age < 21 && age > 0) {
        totalNumberOfPeople21.push( age )

    }else if ( age > 50 ) {
        totalNumberOfPeople50.push( age )
    }
}

console.log( `Total de pessoas menores de 21 anos: ${ totalNumberOfPeople21.length }` )
console.log( `Total de pessoas maiores de 50 anos: ${ totalNumberOfPeople50.length }` )