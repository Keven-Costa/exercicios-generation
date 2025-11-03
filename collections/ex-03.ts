import readlinesync = require( "readline-sync" );

let numeros: Set<number> = new Set<number>();

for ( let i = 0; i < 10; i++ ) {
    numeros.add( readlinesync.questionInt( ) )
}

let auxiliar: number[] = Array.from(numeros)

auxiliar = auxiliar.sort((a, b) => a - b)

console.log( "Listar dados do Set:" )
for ( let i = 0; i < auxiliar.length; i++ ) {
    
    console.log(auxiliar[i])
}
