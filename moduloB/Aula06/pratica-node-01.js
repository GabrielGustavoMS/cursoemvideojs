nome = 'Gabriel Gustavo'
nota = '10'
disciplina = 'Técnicas para converter dados em conhecimento'

usandoConcatenacao =
  'O aluno ' + nome + ' tirou ' + nota + ' em ' + disciplina + '!'
usandoTemplateString = `O aluno ${nome} tirou ${nota} em ${disciplina}! `

console.log(usandoConcatenacao)
console.log(usandoTemplateString)
