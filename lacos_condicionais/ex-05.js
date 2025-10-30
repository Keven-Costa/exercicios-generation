const scanner = require( 'readline-sync' )
let productCode, product, unitPrice, products, quantity, totalValue
let codes = [ 1, 2, 3, 4, 5, 6 ]

productCode = scanner.questionInt( 'Código do Produto: ' )
quantity = scanner.questionInt( 'Quantidade: ' )

switch (productCode) {
    case 1:
        unitPrice = 10.00
        totalValue = ( unitPrice * quantity ).toFixed( 2 )
        console.log( "Produto: Cachorro Quente" )
        console.log( `Valor total: R$ ${totalValue}`)
        break;

    case 2:
        unitPrice = 15.00
        totalValue = ( unitPrice * quantity ).toFixed( 2 )
        console.log( "Produto: X-Salada" )
        console.log( `Valor total: R$ ${totalValue}`)
        break;
    
    case 3:
        unitPrice = 18.00
        totalValue = ( unitPrice * quantity ).toFixed( 2 )
        console.log( "Produto: X-Bacon" )
        console.log( `Valor total: R$ ${totalValue}`)
        break;

    case 4:
        unitPrice = 12.00
        totalValue = ( unitPrice * quantity ).toFixed( 2 )
        console.log( "Produto: Bauru" )
        console.log( `Valor total: R$ ${totalValue}`)
        break

    case 5:
        unitPrice = 8.00
        totalValue = ( unitPrice * quantity ).toFixed( 2 )
        console.log( "Produto: Refrigerante" )
        console.log( `Valor total: R$ ${totalValue}`)
        break

    case 6:
        unitPrice = 13.00
        totalValue = ( unitPrice * quantity ).toFixed( 2 )
        console.log( "Suco de laranja" )
        console.log( `Valor total: R$ ${totalValue}`)
        break
    default:
        console.log( 'Algo deu errado!' )
        break;
}