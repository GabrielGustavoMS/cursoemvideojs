let numbCP = document.getElementById('numb')
let resCP = document.getElementById('res')

function gerarTabuada() {
  let out = calcularTabuada()
  updateUI(out)
}

function calcularTabuada() {
  let numb = Number(numbCP.value)
  let out = ''
  for (let i = 0; i <= 10; i++) {
    out = out + `<option>${i} x ${numb} = ${i * numb}</option>`
  }
  return out
}

function updateUI(output) {
  document.getElementById('res').innerHTML = output
}
