//DECLARAÇÃO DAS VARIAVEIS

var a = 0; /* não alterar o nome */

var b = 0; /* não alterar o nome */

var c = 0;
/* BOTÃO IN/OUT */
var MainMenu = document.getElementById('btn-MainMenu');
var MainMenuOpen = document.querySelector('.e6_59');
var MainMenuColor = document.querySelector('.e5_125');

/* BOTÃO IN/OUT */
var btn = document.getElementById('btn-InOut');
var InOutOpen = document.querySelector('.e6_58');
var InOutColor = document.querySelector('.e5_104');
/* BOTÃO CONTROL */
var Control = document.getElementById('btn-control');
var ControlOpen = document.querySelector('.group_30_203_3');
var ControlColor = document.querySelector('.e6_9');

/* BOTÃO DEVICE */
var Device = document.getElementById('btn-device');
var DeviceOpen = document.querySelector('.group_90_204_111');
var DeviceColor = document.querySelector('.e6_27');

/* BOTÃO MOTION */
var Motion = document.getElementById('btn-motion');
var MotionOpen = document.querySelector('.br_motion_205_148');
var MotionColor = document.querySelector('.e6_31');


//FUNCÕES
function main(varOn,varColor) {
      if(varOn.style.display === 'block' &&  a === 1 && b === 0) {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            a = 0;
        } else if(a === 0){
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            a = 1
        }
}
function IfandElse(varOn,varColor) {
      if(varOn.style.display === 'block' &&  b === 1) {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            b = 0;
        } else if(b === 0){
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            b = 1
        }
}

/* BOTÃO IN/OUT */
MainMenu.addEventListener('click', function() {
      main(MainMenuOpen,MainMenuColor)
});
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
/* BOTÃO DEVICE */
Motion.addEventListener('click', function() {
      IfandElse(MotionOpen,MotionColor)
});
