const scanner = require( 'readline-sync' )
let salarioBruto, adicionalNorturno, horasExtras, Descontos, salarioLiquido

salarioBruto = scanner.questionFloat( 'Digite o salário: ' )
adicionalNorturno = scanner.questionFloat( 'Digite o Adicional Noturno: ' )
horasExtras = scanner.questionFloat( 'Digite as Horas Extras: ' )
Descontos = scanner.questionFloat( 'Digite o Descontos: ' )


salarioLiquido = salarioBruto + adicionalNorturno + ( horasExtras * 5) - Descontos
salarioLiquido = salarioLiquido.toFixed( 2 )

console.log( `Salário Líquido: ${salarioLiquido}` )