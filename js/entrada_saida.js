const input = require('readline-sync')

var nome = input.question('Informe seu primeiro nome?')
var sobrenome = input.question('Informe seu sobrenome?')
var anoDenascimento =
    parseInt(input.question(`Qual ano que você nasceu?`))
var anoAtual = new Date().getFullYear
console.log(typeof(anoDenascimento))

var calcularIdade = anoAtual - anoDenascimento

console.log(`Olá, ${nome} ${sobrenome}você tem 
${calcularIdade} anos`)
