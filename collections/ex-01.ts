import readlinesync = require( "readline-sync" );
let cores: string[] = [];

for ( let i = 0; i < 5; i++ ) {
    cores[i] = readlinesync.question( )
}

console.log( "Listar todas as cores:\n" )
for ( let i = 0; i < 5; i++ ) {
    console.log( cores[ i ] )
}

cores = cores.sort()
console.log()

console.log( "Ordenar as cores:\n" )
for (let i = 0; i < 5; i++ ) {
    console.log( cores[ i ] )
}
