const scanner = require( "readline-sync" )
let operacao, deposito, saque, valor
let saldo =  1000.00
saldo.toFixed( 2 )

operacao = scanner.questionInt( "Operação: " )

switch ( operacao ) {
    case 1:
        console.log( "Operação - Saldo" )
        console.log()
        console.log( `Saldo: ${saldo}` )
        console.log()
        break;
    case 2:
        valor = scanner.questionFloat( "Valor: R$" )
        console.log()
         if ( valor < 0 ) {
            console.log( "erro: você esta iseriu um número negativo" )
            break
        } else if ( valor > saldo ) {
            console.log( "Operação - Saque\n" )
            console.log( "Saldo Insuficiente!" )
            break
        }

        console.log( "Operação - Saque\n" )
        
        saldo -= valor
        console.log( `Novo Saldo: R$${ saldo.toFixed( 2 ) }` )
        console.log()
        break
    case 3:
        deposito = scanner.questionFloat( "Valor: R$" )
        console.log()
         if ( deposito < 0 ) {
            console.log( "erro: você iseriu um número negativo" )
            break
        }
        saldo += deposito
        console.log( "Operação - Depósito" )    
        console.log()
        console.log( `Novo Saldo: R$${ saldo.toFixed( 2 ) }` )
        break

    default:
        console.log( "Operação Inválida!\n" )
        break;
}