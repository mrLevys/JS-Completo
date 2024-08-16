// estrutura de for clássico, "i" tanto pode icrementar quando decrementar
for (let i = 0; i<=10; i++) {
  console.log(`Linha ${i}`);
}
//----------------------------
// Verificar se é par ou impar o valor do indice, através do for
for (let i = 0; i<=10; i++) {
  const parOuImpar = i % 2 === 0 ? 'par' : 'impar';
  console.log(`${i} é ${parOuImpar}`);
}
//----------------------------
// Acessar valores de arrays via for
const frutas = ['Maçã', 'Pera', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
  const fruta = frutas[i];
  console.log(`Índice ${i} - ${fruta}`)  
} 