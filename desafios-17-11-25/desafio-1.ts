function verificarPolindromo(palavra: string ): void {
    let palavraReversa = ""
    for (let index = 0; index < palavra.length ; index++ ) {
        palavraReversa += palavra[ (palavra.length - 1 ) -index ] 
        
    }

    if ( palavraReversa == palavra ) {
        console.log(`A palavra: ${palavra} é um Polindromo`)
    } else {
        console.log(`A palavra: ${palavra} NÃO é um Polindromo`)
    }
   
}

verificarPolindromo('arara')




