const scanner = require( 'readline-sync' )
let salario, abono, novoSalario;

salario = scanner.questionFloat( "Digite o Sálario: \n" )
abono = scanner.questionFloat( "Digite o Abono: \n" )

novoSalario =  salario + abono
novoSalario = novoSalario.toFixed(2)

console.log(`O novo sálario: ${novoSalario}`)