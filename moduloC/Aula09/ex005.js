window.document.write('<br/> <p id="hello"> Olá mundo !</p>')
document.getElementById('hello').style.fontFamily = 'cursive'

document.getElementsByTagName('body')[0].style.background = '#101010'

document.getElementsByName('msg')[0].innerText = 'Div alterada por js'

document.getElementsByClassName('txt')[0].style.background = '#4fe377'

document.querySelector('p.txt').style.color = 'black'
