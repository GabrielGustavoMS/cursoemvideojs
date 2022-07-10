let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  }
  return false
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  }
  return false
}

function calculaMedia(lista) {
  let acc = 0
  for (let i = 0; i < lista.length; i++) {
    acc = acc + lista[i]
  }
  return (acc / lista.length).toFixed(2)
}

function ordenaVetor(lista) {
  lista.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a == b) {
      return 0
    } else {
      return 1
    }
  })
}

function encontraMenorEMaior(lista) {
  if (lista.length > 0) {
    ordenaVetor(lista)
    return [lista[0], lista[lista.length - 1]]
  }
  return 'Lista vazia'
}

function adicionar() {
  console.log(!inLista(num.value, valores), valores)
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    updateListaUI(valores)
    num.value = ''
  } else {
    window.alert('Valor inválido ou já encontrado na lista')
  }
}

function updateListaUI(valores) {
  for (i in valores) {
    let newOption = document.createElement('option')
    lista.appendChild(newOption)
    lista[i].innerHTML = valores[i]
  }
}

function finalizar() {
  if (lista.length > 0) {
    const [menor, maior] = encontraMenorEMaior(valores)
    const media = calculaMedia(valores)
    res.innerHTML = `<h2>A lista tem ${valores.length} valores</h2><br>
  <h2>O menor valor da lista é ${menor} e o maior é ${maior}</h2><br>
  <h2>A média dos valores da lista é ${media}</h2>
  `
  } else {
    res.innerHTML = ''
  }
}
