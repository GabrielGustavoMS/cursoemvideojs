# Aula 13 - Repetições (Parte 1)

## Revisão Aula 12

Q01 - Sabe mudar a cor de fundo de um site dinamicamente, usando JS?

Sim. Abaixo um exemplo:

`document.body.style.background = '#000'`

Q02 - Consegue inserir uma imagem dentro do site sem ter a tag `<img/>` previamente criada?

Sim. Para isso pode-se realizar o seguinte:

1. Criar o elemento HTML e armazená-lo em uma variável: `var img = document.createElementy('img')`
2. Configurar o endereço da imagem por meio de seu atributo source: `img.setAttribute('src','./caminhoDaImagem/img.extensão')`
