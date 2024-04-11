// trabalhando com datas no JS
// Object Date();
// link ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date();
const result = document.querySelector('#resultado');
let msg;

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (data) {
  
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';  
  
  msg = `A Data de agora é: ${data.toString()}.`;
  
  const p = criaP();
  
  p.innerHTML = msg;
  resultado.appendChild(p);
}

// exemplo sem ternário
setResultado(data);
  