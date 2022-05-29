function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade < 10) {
        img.setAttribute('src', './img/menino.jpg')
      } else if (idade < 25) {
        img.setAttribute('src', './img/jovem-m.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', './img/homem.jpg')
      } else {
        img.setAttribute('src', './img/idoso.jpg')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade < 10) {
        img.setAttribute('src', './img/menina.jpg')
      } else if (idade < 25) {
        img.setAttribute('src', './img/jovem-f.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', './img/mulher.jpg')
      } else {
        img.setAttribute('src', './img/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br/>`
    res.appendChild(img)
    res.innerHTML += `<br/><small><em>Fonte da Imagem: Pexels.com</em></small>`
  }
}
