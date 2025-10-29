const scanner = require( 'readline-sync' )
let notas = [], mediaFinal

for (let i = 0; i < 4; i++) {
    notas[i] = scanner.questionFloat( `Digite a ${ i+1 }° nota : \n` )
}
mediaFinal = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length 
mediaFinal = mediaFinal.toFixed( 1 )

console.log(`A média final: ${mediaFinal}`)