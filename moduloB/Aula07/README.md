# Aula 07 - Operadores

## Revisão da Aula 06

Q01 - Como é possível guardar o valor digita em um prompt() dentro de uma variável?
Basta utilizar o sinal de atribuição da seguinte forma: `var algo= prompt('Digite algo')`

Q02 - Como fazer com que um número digitado em um prompt() possa ser usado em um cálculo?
Um `prompt()` retorna uma string que pode ser convertida para o tipo number utilizando `Number.parseInt(string)` ou `Number.parseFloat`. Também pode-se utilizar uma sintaxe curta: `Number(string)`.

Q03 - Como transformar um texto to para letras MAIÚSULAS?
Pode-se realizar a formatação da seguinte forma:<br/>
`var texto = 'algum texto'`<br/>
`var textUP = texto.toUpercase()`<br/>
`console.log(textUP)`<br/>
**Como saída obteremos: `ALGUM TEXTO`**

Q04 - Como mostrar um número formatado como um valor monetário?
Pode utilizar o método: `.toLocaleString()`. Veja o exemplo abaixo:<br/>
`var numb = 13`<br/>
`numbLC = numb.toLocaleString('pt-BR',{style: currency, currency: 'BRL'})`<br/>
`console.log(numbLC)`<br/>
**Usando o node, como saída obteremos: R$13.00**
