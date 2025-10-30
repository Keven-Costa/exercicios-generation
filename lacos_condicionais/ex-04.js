const scanner = require( 'readline-sync' )

let firstWord, secondWord, thirdWord

firstWord = scanner.keyInSelect( firstOption );

if ( firstWord == 0 ) {
    secondWord = scanner.keyInSelect( [ 'Ave', 'Mamífero' ] )

    if ( secondWord == 0 ) {
        thirdWord = scanner.keyInSelect( [ 'Carnívoro', 'Onívoro' ] )

        if ( thirdWord == 0 ) {
            console.log( 'Águia' )

        } else {
            console.log( 'Pomba' )
        }
    } else {
        thirdWord = scanner.keyInSelect( [ 'Onívoro', 'Herbívoro' ] )

        if ( thirdWord == 0 ) {
            console.log( 'Homem' )

        } else {
            console.log( 'Vaca' )
        }
    }
    

} else if ( firstWord == 1 ) {
    secondWord = scanner.keyInSelect( [ 'Inseto', 'Anelídeo' ] )

    if ( secondWord == 0 ) {
        thirdWord = scanner.keyInSelect( [ 'Hematófago', 'Herbívoro' ] )

        if ( thirdWord == 0 ) {
            console.log( 'Pulga' )

        } else {
            console.log( 'Largata' )
        }
    } else {
        thirdWord = scanner.keyInSelect( [ 'Hematófago', 'Onívoro' ] )

        if ( thirdWord == 0 ) {
            console.log( 'Sanguessuga' )

        } else {
            console.log( 'Minhoca' )
        }
    }
}
