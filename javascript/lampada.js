var lamp = window.document.getElementById('lampada');
var tituloLamp = window.document.getElementById('tituloLamp');
var caixaSecao = window.document.getElementById('caixaSecao');
var html = window.document.getElementById('htmlAddText')

function estaquebrada(){
  return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
  if(!estaquebrada()){
  lamp.src ='./imagens/lampada_acesa.svg';
  tituloLamp.style.color='black'
  caixaSecao.style.background='#ffffe0'
  }
}

function desligar(){
  if(!estaquebrada()){
  lamp.src ='./imagens/lampada_apagada.svg'
  tituloLamp.style.color='#222'
  caixaSecao.style.background='#888'
  }
}

lamp.addEventListener('click',quebrar)
function quebrar(){
  lamp.src = './imagens/lampada_quebrada.svg'
  tituloLamp.style.color='#222'
  caixaSecao.style.background='#888'
}