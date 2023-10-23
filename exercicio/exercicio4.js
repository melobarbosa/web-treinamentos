const input = require('readline-sync')

// Peso das provas
const p2 = 2
const p3 = 3
const p5 = 5

var notaDisciplina1, notaDisciplina2, notaDisciplina3, mediaPoderada

notaDisciplina1 = parseFloat(input.question(`Informe a nota da disciplina 1:`))
notaDisciplina2 = parseFloat(input.question(`Informe a nota da disciplina 2:`))
notaDisciplina3 = parseFloat(input.question(`Informe a nota da disciplina 3:`))

//regra
mediaPonderada = (notaDisciplina1 * p2 + notaDisciplina2 * p3 + notaDisciplina3 * p5) / (p2 + p3 + p5)
    console.log(`À sua média poderada é ${mediaPonderada}`)