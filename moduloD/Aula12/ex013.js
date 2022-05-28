var agora = new Date()
var diaSem = agora.getDay()
var diaPorExtenso = ''

switch (diaSem) {
  case 0:
    diaPorExtenso = 'Domingo'
    break
  case 1:
    diaPorExtenso = 'Segunda'
    break
  case 2:
    diaPorExtenso = 'Terça'
    break
  case 3:
    diaPorExtenso = 'Quarta'
    break
  case 4:
    diaPorExtenso = 'Quinta'
    break
  case 5:
    diaPorExtenso = 'Sexta'
    break
  case 6:
    diaPorExtenso = 'Sábado'
    break
  default:
    diaPorExtenso = 'Dia de São Nunca'
    break
}
console.log(`Hoje é ${diaPorExtenso}`)
