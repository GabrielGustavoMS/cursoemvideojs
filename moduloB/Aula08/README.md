# Aula 08 - Operadores Parte 2

## Revisão da Aula 07

Q01 - Para que serve o operador % em Js? Seria para calcular a porcentagem?
Não. O operador % serve para calcular o resta da divisão inteira.

Q02 - 6 + 4 / 2 é igual a 5 ou 8?
É igual a 8, pois o operador de divisão tem maior precedência em relação ao de subtração.

Q03 - Se uma variável n está valendo 10 e executamos um n+=5, qual será seu novo valor?
Seu novo valor será 15.

Q04 - Para que servem os operadores ++ e --?
Ambos alteram o valor de uma variável em 1 unidade, ++ acresce e -- decresce

## Tipos de Operadores

Os **operadores** são símbolos que representam determinadas operações que são aplicadas sobre os **operandos**. Os principais tipos de operação que classificam os operadores são:

- Aritméticos
- Atribuição
- Relacionais
- Lógico
- Ternário

Exemplo: `2 + 3`, nesse caso 2 e 3 são operandos e + é o operador.

### Operadores Relacionais

Os operadores relacionais sempre tem como resultado da operação, um valor **booleano**. Esses operadores são responsáveis por operações relacionais, as quais normalmente questiona-se como um operando a esquerda se relaciona com um operando a direita, do operador.

Se a resposta para o questionamento que representa uma relação for sim, então o disse que a relação é verdadeira e assim retornar-se-á o valor true. Caso contrário, false.

_Note que o símbolo -> indica a saída da operação, para esse exemplo_

- É Maior?: `5 > 2` -> `true`
- É Menor?:`7 < 4` -> `false`
- É Maior ou Igual a?`8 >= 8 ` -> `true`
- É Menor ou Igual a?`9 <= 7` -> `false`
- É Igual a?`5 == 5` -> `true`
- É Diferente de?`4 != 4` -> `false`

#### Identidade

Note que, em JavaScript, `5 == '5'` é verdadeiro, ou seja, o valor 5 do tipo number e o valor '5' do tipo string são iguais.
Para verificar se os operandos são iguais em valor e do mesmo tipo, deve-se utilizar o operador de identidade, representado por `===`.

Abaixo um exemplo comparando as saídas do operador `==` (É Igual a?) e `===` (É identico a?)<br/> <br/>

![Exemplo operador identidade, como nodejs](operador-de-identidade-ex01.jpg)

_Também há o operador `!==`, chamado de desigual restrito. Ele é semelhante ao `!=`, mas assim como o `===` também avalia o tipo dos operandos_

### Operadores Lógicos

Esses operadores são responsáveis por operações lógicas, ou seja, eles atuam com base na lógica booleana, para realizar:

- Negação: `!`
- Conjunção: `&&`
- Disjunção: `||`

**Tabela verdade - Operador de negação**

| Entrada | Saída   |
| ------- | ------- |
| `true`  | `false` |
| `false` | `true`  |

**Tabela verdade - Operador de Conjunção**

| Entrada A | Entrada B | Saída   |
| --------- | --------- | ------- |
| `true`    | `true`    | `true`  |
| `true`    | `false`   | `false` |
| `false`   | `true`    | `false` |
| `false`   | `false`   | `false` |
