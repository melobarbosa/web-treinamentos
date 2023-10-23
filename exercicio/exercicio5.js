const input = require('readline_sync')

var altura, largura, profundidade, volume

 altura = input.question('Altura')
largura = input.question('Largura')
profundidade = input.question('profundidade')

volume = altura * largura * profundidade
console.log('O volume é'+volume)