const scanner = require( "readline-sync" )

let matriz = [ [], [], [], [], [], [], [], [], [], [] ]
let texto = ""
let countAlun = 1
let count = 0
let media = []

for ( let i = 0; i < 10; i++ ) {
    for ( let j = 0; j < 4; j++ ) {
        matriz[ i ][ j ] = scanner.questionFloat( `Digite a ${ j + 1}° do aluno ${i +1}: ` )
                texto += `| ${matriz[ i ][ j ]} | `
        count++

        if (count == 4) {
            texto += "\n"
            count = 0
        }
    }
    
}
count = 0
let soma = 0
let text2 = ""

for ( let i = 0; i < 10; i++ ) {
    for ( let j = 0; j < 4; j++ ) {
        soma += matriz[i][j]
        media = (soma / 4).toFixed(1)
        text2 += `| ${ media } |`

    }
    
}


console.log(texto)
console.log(text2)