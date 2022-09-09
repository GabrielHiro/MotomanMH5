// INFORMAÇÕES SOBRE OS BOTÕES

// DECLARAÇÃO DAS VARIAVEIS

var c = 0; /* não alterar o nome */


// INICIO VAR IN/OUT

var btn = document.getElementById('btn-InOut');
var Dout = document.querySelector('.e6_5');
var DoutInfos = document.querySelector('.infos_dout');


var Wait = document.querySelector('.e6_11');
var WaitInfos = document.querySelector('.infos_wait');


//FUNÇÕES

function MouseSee(varOn) {
    if(varOn.style.display === 'block' &&  c === 1){
          varOn.style.display = 'none';
          c = 0;
      } else if(c === 0){
          varOn.style.display = 'block';
          c = 1
      }
}


// INFORMAÇÕES BOTÕES

btn.addEventListener('mouseover', function() {
    MouseSee(InOutInfos)
});
btn.addEventListener('mouseout', function() {
    MouseSee(InOutInfos)
});

Dout.addEventListener('mouseover', function() {
    MouseSee(DoutInfos)
});
Dout.addEventListener('mouseout', function() {
    MouseSee(DoutInfos)
});

Wait.addEventListener('mouseover', function() {
    MouseSee(WaitInfos)
});
Wait.addEventListener('mouseout', function() {
    MouseSee(WaitInfos)
});