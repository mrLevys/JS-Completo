// Entendendo sobre operações ternárias
// ? : - operadores

const pontuacaoUsuario = 999;
const result = document.querySelector('#resultado');
let msg ;
let isValid;

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg) {
  isValid = pontuacaoUsuario; 

  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';  
  
  isValid = isValid >= 1000 ?
    msg = `A pontuação do usuário é positiva: ${pontuacaoUsuario}.` :
    msg = `A pontuação do usuário não é positiva: ${pontuacaoUsuario}.`;
  
  const p = criaP();
  
  p.innerHTML = msg;
  resultado.appendChild(p);
}

// exemplo sem ternário
setResultado(msg);
  