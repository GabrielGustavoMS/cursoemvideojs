function calcular() {
  var txtv = document.getElementById('txt-velocity')
  var res = document.querySelector('div#res')
  var velocity = Number(txtv.value)

  res.innerHTML = `<p>Sua velocidade atual é de <strong> ${velocity} </strong> Km/h</p>`

  if (velocity > 60) {
    res.innerHTML += `Você foi <strong> multado  </strong> por excesso de velocidade`
  }
  res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`
}
