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

## Tipos de Operadores

Os **operadores** são símbolos que representam determinadas operações que são aplicadas sobre os **operandos**. Os principais tipos de operação que classificam os operadores são:

- Aritméticos
- Atribuição
- Relacionais
- Lógico
- Ternário

Exemplo: `2 + 3`, nesse caso 2 e 3 são operandos e + é o operador.

## Operadores aritméticos

- Adição: `5 + 2` => 7
- Subtração: `5 - 2` => 3
- Multiplicação: `5 * 2` => 10
- Divisão: `5 / 2` => 2.5
- Resto da divisão inteira: `5 % 2` => 1
- Potência: `5 ** 2` => 25

## Precedência dos operados

Como na matemática, as operações são realizadas em uma ordem específica, a precedência. A precedência determina qual operação deve ser realizada primeiro.

_Note que é possível alterar a precedência utilizando parênteses `(` `)`_

Ordem de precedência dos principais operadores, da mais alta para a mais baixa:

1. `( )`
2. `**`
3. `* / %`
4. `+ -`

Você pode saber mais sobre a ordem de precedência no [manual de desenvolvedores js da mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
