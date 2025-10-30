const scanner = require( 'readline-sync' )
let jobCode, position, salary, newSalary, name
let positions = {
    gerente: 10,
    vendedor: 7,
    supervisor: 9,
    motorista: 6,
    estoquista: 5,
    tecnico_de_ti: 8
}

name = scanner.question( "Nome do colaborador: ")
position = scanner.questionInt( 'Cargo: ' )
salary = scanner.questionInt( 'Salário: ' )

switch (position) {
    case 1:
        newSalary = ( salary  + ( ( 10 / 100) * salary) ).toFixed( 2 )
        console.log( `Nome do colaborador: ${name}` )
        console.log( "Cargo: Gerente" )
        console.log( `Salário: ${newSalary}` )
        break;
    case 2:
        newSalary =  ( salary  + ( ( 7 / 100) * salary ) ).toFixed( 2 )
        console.log( `Nome do colaborador: ${name}` )
        console.log( "Cargo: Vendedor" )
        console.log( `Salário: ${newSalary}` )
        break
    case 3: 
        newSalary = ( salary  + ( ( 9 / 100) * salary ) ).toFixed( 2 )
        console.log( `Nome do colaborador: ${name}` )
        console.log( "Cargo: Supervisor" )
        console.log( `Salário: ${newSalary}` )
        break
    case 4: 
        newSalary = ( salary  + ( ( 6 / 100) * salary ) ).toFixed( 2 )
        console.log( `Nome do colaborador: ${name}` )
        console.log( "Cargo: Motorista" )
        console.log( `Salário: ${newSalary}` )
        break
    case 5:
        newSalary = ( salary  + ( ( 5 / 100) * salary ) ).toFixed( 2 )
        console.log( `Nome do colaborador: ${name}` )
        console.log( "Cargo: Estoquista" )
        console.log( `Salário: ${newSalary}` )
        break
    case 6: 
        newSalary = ( salary  + ( ( 8 / 100) * salary )).toFixed( 2 )
        console.log( `Nome do colaborador: ${name}` )
        console.log( "Cargo: Técnico de TI" )
        console.log( `Salário: ${newSalary}` )
        break
    default:
        console.log( "Algo deu errado" )
        break;
}