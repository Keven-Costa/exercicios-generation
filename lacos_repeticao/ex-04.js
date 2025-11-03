const scanner = require( "readline-sync" )

let age, genderIdentity, developerPerson, sumOfAllAges = 0

let totalNumberOfBackendDevelopers = 0
let cisAndTransWomenFrontendDevelopers = 0
let cisAndTransMenMobileDevelopersOver40YearsOld = 0
let nonBinaryFullStackDevelopersUnder30 = 0
let totalNumberOfPeopleWhoRespondedToTheSurvey = 0
let averageAgeOfPeopleWhoRespondedToTheSurvey = 0

let wantToContinue = true
let userChoice

let hasBackendDevelopers = null
let hasCisAndTransWomenFrontendDevelopers = null
let hasCisAndTransMenMobileDevelopersOver40YearsOld = null
let hasNonBinaryFullStackDevelopersUnder30 = null

while ( wantToContinue ) {
    age = scanner.questionInt( "Idade: " )
    genderIdentity = scanner.questionInt( "Identidade de Gênero: " )
    developerPerson = scanner.questionInt( "Pessoa Desenvolvedora: " )

    hasBackendDevelopers = developerPerson === 1
    hasCisAndTransWomenFrontendDevelopers = ( genderIdentity === 1 || genderIdentity === 4 ) && developerPerson === 2
    hasCisAndTransMenMobileDevelopersOver40YearsOld = ( genderIdentity === 2 || genderIdentity === 5 ) && developerPerson === 3 && age > 40
    hasNonBinaryFullStackDevelopersUnder30 = genderIdentity === 3 && developerPerson === 4 && age < 30

    if ( hasBackendDevelopers ) {
        totalNumberOfBackendDevelopers += 1

    } else if ( hasCisAndTransWomenFrontendDevelopers ) {
        cisAndTransWomenFrontendDevelopers += 1
    } else if ( hasCisAndTransMenMobileDevelopersOver40YearsOld ) {
        cisAndTransMenMobileDevelopersOver40YearsOld += 1
    } else if ( hasNonBinaryFullStackDevelopersUnder30 ) { 
        nonBinaryFullStackDevelopersUnder30 += 1
    }

    sumOfAllAges += age
    totalNumberOfPeopleWhoRespondedToTheSurvey += 1

    console.log()
    userChoice = scanner.question( "Deseja continuar (S/N): ")
    console.log()
    
    if ( userChoice == 'S' || userChoice == 's') {
        wantToContinue = true
    } else if ( userChoice == 'N' || userChoice == 'n' ) {
        wantToContinue = false
    }
    
}

averageAgeOfPeopleWhoRespondedToTheSurvey = sumOfAllAges / totalNumberOfPeopleWhoRespondedToTheSurvey

console.log( `O número de pessoas desenvolvedoras Backend: ${ totalNumberOfBackendDevelopers }\n` )
console.log( `O número de Mulheres Cis e Trans desenvolvedoras Frontend: ${ cisAndTransWomenFrontendDevelopers }\n` )
console.log( `O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${ cisAndTransMenMobileDevelopersOver40YearsOld }\n` )
console.log( `O número de Não Binários desenvolvedores FullStack menores de 30 anos: ${ nonBinaryFullStackDevelopersUnder30 }\n` )
console.log( `O número total de pessoas que responderam à pesquisa: ${ totalNumberOfPeopleWhoRespondedToTheSurvey }\n`)
console.log( `A média de idade das pessoas que responderam à pesquisa: ${ averageAgeOfPeopleWhoRespondedToTheSurvey }\n` )
