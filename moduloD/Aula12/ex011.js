function verificaObrigatoriedadeDoVoto(idade) {
  console.log(`Você tem ${idade} anos!`)
  if (idade < 16) {
    console.log('Não vota!')
  } else if (idade < 18 || idade > 65) {
    console.log('Voto opcional!')
  } else {
    console.log('Voto obrigatório')
  }
  console.log('\n')
}

verificaObrigatoriedadeDoVoto(22)
verificaObrigatoriedadeDoVoto(77)
verificaObrigatoriedadeDoVoto(17)
verificaObrigatoriedadeDoVoto(13)
