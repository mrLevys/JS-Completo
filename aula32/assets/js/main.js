const pessoa = {
  // nome: '',
  // sobrenome: '',
  idade: 36,
  endereco: {
    rua: 'Av Brasil',
    numero: 320,
  }
}

// Atribuição via desestruturação
const { 
  nome = 'fulano', //supondo que a variavel não exista, ai seria atribuido um valor padrão
  sobrenome: s = 'de ciclano', //Pode-se especificar a chave e mudar o nome da variavel
  idade,
  ...resto
} = pessoa;
console.log(nome, s, idade, resto)
