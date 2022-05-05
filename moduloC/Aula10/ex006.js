var area2 = document.getElementById('area2')
area2.addEventListener('click', clicar2)
area2.addEventListener('mouseenter', entrar2)
area2.addEventListener('mouseout', sair2)

function clicar2() {
  area2.innerText = 'Clicou'
  area2.style.background = 'red'
}

function entrar2() {
  area2.innerText = 'Entrou'
  area2.style.background = 'rgb(42, 139, 42)'
}

function sair2() {
  area2.innerText = 'Saiu'
  area2.style.background = 'rgb(42, 139, 42)'
}
