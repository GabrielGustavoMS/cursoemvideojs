let inicioCP = document.getElementById('inicio')
let fimCP = document.getElementById('fim')
let passoCP = document.getElementById('passo')

function contar(inicio, fim, passo) {
  if (passo == 0) {
    alert('Impossível contar com passo igual a 0, considerando passo = 1!')
    passo = 1
  }
  let saida = '<h2>Contando: </h2> <p>'
  for (i = inicio; i <= fim; i = i + passo) {
    saida = saida + '&#128073; ' + i + ' '
  }
  saida = saida + '&#127937; </p>'
  console.log(saida)
  return saida
}

function iniciarContagem() {
  let inicio = Number(inicioCP.value)
  let fim = Number(fimCP.value)
  let passo = Number(passoCP.value)

  function validaCampos() {
    return fim > 0 && passo >= 0 && fim > inicio ? true : false
  }

  function updateUI(output) {
    document.getElementById('res').innerHTML = output
  }

  if (validaCampos()) {
    let saida = contar(inicio, fim, passo)
    updateUI(saida)
  } else {
    updateUI(
      '<br/> <h2>Impossível contar!</h2> <p> Verifique os valores digitados! </p>'
    )
  }
}
