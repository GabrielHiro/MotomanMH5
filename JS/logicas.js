//DECLARAÇÃO DAS VARIAVEIS

var a = 0; /* não alterar o nome */

/* BOTÃO IN/OUT */
var btn = document.getElementById('btn-InOut');
var InOutOpen = document.querySelector('.e6_58');
var InOutColor = document.querySelector('.e5_104');
/* BOTÃO CONTROL */
var Control = document.getElementById('btn-control');
var ControlOpen = document.querySelector('.group_30_203_3');
var ControlColor = document.querySelector('.e6_9');

/* BOTÃO CONTROL */
var Device = document.getElementById('btn-device');
var DeviceOpen = document.querySelector('.group_90_204_111');
var DeviceColor = document.querySelector('.e6_27');


//FUNCÕES
function IfandElse(varOn,varColor) {
      if(varOn.style.display === 'block' &&  a === 1) {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            a = 0;
        } else if(a === 0){
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            a = 1
        }
}

/* BOTÃO IN/OUT */
btn.addEventListener('click', function() {
      IfandElse(InOutOpen,InOutColor)
});

/* BOTÃO CONTROL */
Control.addEventListener('click', function() {
      IfandElse(ControlOpen,ControlColor)
});

/* BOTÃO DEVICE */
Device.addEventListener('click', function() {
      IfandElse(DeviceOpen,DeviceColor)
});