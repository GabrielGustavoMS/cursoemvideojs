function somar() {
  var txtn1 = document.getElementById('txtn1')
  var txtn2 = document.querySelector('input#txtn2')
  var res = window.document.getElementById('res')

  var n1 = Number(txtn1.value)
  var n2 = Number(txtn2.value)
  var s = n1 + n2

  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}
