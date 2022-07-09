let num = [5, 8, 2, 9, 3]
console.log(`Meu vetor: ${num}`)
num[2] = 13
console.log('num[2] = 13')
console.log(`Meu vetor: ${num}`)
num.push(25)
console.log('num.push(25)')
console.log(`Meu vetor: ${num}`)
console.log('num.length')
console.log('Número de elementos: ' + num.length)
console.log('Vetor Ordenado em Unicode após: num.sort()')
num.sort()
console.log(` ${num}`)
num.sort((a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else return 0
})
console.log('Vetor ordenado usando função personalizada- Crescente:')
console.log(`${num}`)
