const verdadeira =  true

// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função

// let nome = 'Luiz' // criando
// var nome2 = 'Luiz' 

// if(verdadeira) {
//   let nome = 'Otavio'
//   var nome2 = 'Rogerio' // redeclarada
//   if(verdadeira){
//     let nome = 'Outra coisa'
//     var nome2 = 'Ronaldo' // redeclarada
//   }
// }

// console.log("🚀 ~ console: Ok", nome2)

var sobrenome = 'Miranda'
function falaOi() {
  var nome = 'Luis'
  console.log(sobrenome)
}
falaOi()
// console.log(nome)