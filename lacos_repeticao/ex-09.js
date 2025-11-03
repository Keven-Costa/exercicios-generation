const scanner = require( "readline-sync" )

let matriz = [ [], [], []]
let texto = ""
let count = 0
let mainDiagonalElements = [] 
let secondaryDiagonalElements = []
let sumOfMainDiagonalElements = []
let sumOfSecondaryDiagonalElements = []

for ( let i = 0; i < 3; i++ ) {
    for ( let j = 0; j < 3; j++ ) {
        matriz[ i ][ j ] = scanner.questionInt( "Digite um número: " )
        texto += `| ${matriz[ i ][ j ]} | `
        count++

        if (count == 3) {
            texto += "\n"
            count = 0
        }
    }
    
}


mainDiagonalElements.push( matriz[0][0], matriz[1][1], matriz[2][2] )
secondaryDiagonalElements.push( matriz[0][2], matriz[1][1], matriz[2][0] )

sumOfMainDiagonalElements = matriz[0][0] + matriz[1][1] + matriz[2][2]
sumOfSecondaryDiagonalElements = matriz[0][2] + matriz[1][1] + matriz[2][0]

console.log( `${ texto }\n` )

console.log(`Elementos da Diagonal Principal: ${mainDiagonalElements}\n`)
console.log(`Elementos da Diagonal Secundária: ${secondaryDiagonalElements}\n`)
console.log(`Soma dos Elementos da Diagonal Principal: ${sumOfMainDiagonalElements}\n`)
console.log(`Soma dos Elementos da Diagonal Secundária: ${sumOfSecondaryDiagonalElements}\n`)
