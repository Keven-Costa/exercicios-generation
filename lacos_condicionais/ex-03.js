const scanner = require( 'readline-sync' )
let name, age, firstDonation


name = scanner.question( "Digite o Nome do doador: " )
age = scanner.questionInt( "Digite a Idade do doador: " )
firstDonation = scanner.keyInSelect( [true, false] , 'Primeira doação de sangue?');

isEligibleToDonateBlood = ( age >= 18 && age < 60 ) || ( ( age >= 60 && age <= 69 ) && ( firstDonation === 1 ) );

if ( isEligibleToDonateBlood ) {
    console.log( `${ name } está apta para doar sangue!` )
} else if ( !isEligibleToDonateBlood ) {
    console.log( `${ name } não está apto para doar sangue!` )
}