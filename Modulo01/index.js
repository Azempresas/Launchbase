

const aluno01 ='Alex'
const notaAluno01 = 9.8

const aluno02 = 'Ana'
const notaAluno02 = 10

const aluno03 = 'Fulano '
const notaAluno03 = 20


const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

if (media > 5) {

console.log(` A nota foi ${media}. parabens `)
}
else {
    console.log(` A nota foi ${media}. vc é burro`)

}

// CALCULO DE IMC 
const nome = 'Alex'
const peso = 78
const altura = 1.70
const imc = peso / ( altura * altura )

let mensagem = ""

if (imc >= 30 ) {
mensagem = ` ${nome} você esta acima do peso `

} else {
    mensagem = ` ${nome} você não está acima do peso `
}

console.log(mensagem)

// CALCULO DE APOSENTADORIA


const nombre = 'Ana'
const sexo = 'F'
const idade = "60"
const contribucao = "20"

const calculocontribucao = idade + contribucao

const homePodeAposentar = sexo == "M" && contribucao >= 35 && calculocontribucao >= 95
const mulherPodeAposentar = sexo == "F" && contribucao >= 30 && calculocontribucao >= 85

if (homePodeAposentar || mulherPodeAposentar ) {

    console.log( `${nombre} você pode se aposentar!`)
} else {

    console.log (`${nombre} você não pode se aposentar `)
}





