// Estrutura condicional Switch Case no JS

/*
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
*/ 

// link ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

const data = new Date();
const result = document.querySelector('#resultado');
let msg;

const diaSemana  = data.getDay();

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo'
      return diaSemanaTexto;
    case 1:     
      diaSemanaTexto = 'Segunda'
      return diaSemanaTexto;  
    case 2:     
      diaSemanaTexto = 'Terça'
      return diaSemanaTexto;
    case 3:     
      diaSemanaTexto = 'Quarta'
      return diaSemanaTexto;  
    case 4:     
      diaSemanaTexto = 'Quinta'
      return diaSemanaTexto;  
    case 5:     
      diaSemanaTexto = 'Sexta'
      return diaSemanaTexto;  
    case 6:     
      diaSemanaTexto = 'Sábado'
      return diaSemanaTexto;  
    default:
      diaSemanaTexto = ''
      return diaSemanaTexto;
  }
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (data) {
  
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';  
  
  msg = `O dia da semana é ${getDiaSemanaTexto(diaSemana)} e a data de é: ${data.toString()}.`;
  
  const p = criaP();
  
  p.innerHTML = msg;
  resultado.appendChild(p);
}

// exemplo sem ternário
setResultado(data);
  