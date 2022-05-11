function verificar() {
  var txtpais = document.getElementById('txt-pais')
  var pais = txtpais.value.toUpperCase()
  var res = document.querySelector('div#res')

  if (pais != 'BRASIL') {
    res.innerHTML = 'Você é Estrangeiro!'
  } else {
    res.innerHTML = 'Você é Brasileiro'
  }
}
