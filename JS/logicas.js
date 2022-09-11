//DECLARAÇÃO DAS VARIAVEIS

var a = 0; /* não alterar o nome */

var b = 0; /* não alterar o nome */

var c = 0; /* não alterar o nome */

var d = 0; /* não alterar o nome */

var f = 0; /* não alterar o nome */

var g = 0; /* não alterar o nome */

var h = 0; /* não alterar o nome */

var x = 0; /* não alterar o nome */

var tela = 0;

var off_tela = 0;


// INTERTRAVAMENTO ENTRE OS BOTÕES

var Open;//Botões MAIN MENU
var Color;//Botões MAIN MENU
var OpenSup;//Botões Superior
var ColorSup;//Botões Superior

var OpenMN;//Botões Superior
var ColorMN;//Botões Superior


// INICIO VAR DOS BOTÕES MAIN MENU

// ERRO
var Erro1 = document.getElementById('erro');
var Erro2 = document.getElementById('Erro');
var Erro3 = document.getElementById('Erro3');
var Erro4 = document.getElementById('Erro4');

/* BOTÃO MAIN MENU */
var MainMenu = document.getElementById('btn-MainMenu');
var MainMenuOpen = document.querySelector('.lt-esq');
var MainMenuOpenFundo = document.querySelector('.e12_37');
var MainMenuColor = document.querySelector('.e5_125');
var MainMenuBTN4On = document.querySelector('.barra-inferior-4btn-on');
var MainMenuBTN4 = document.querySelector('.barra-inferior-4btn');

// INFORM LIST

var InfList = document.getElementById('InformList');
var InfListOpen = document.querySelector('.e6_59');
var InfListColor = document.querySelector('.e9_275');

/* BOTÃO IN/OUT */
var btn = document.getElementById('btn-InOut');
var InOutOpen = document.querySelector('.e6_58');
var InOutColor = document.querySelector('.e5_104');
var InOutInfos = document.querySelector('.infos_220_4');

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
var MotionOpen = document.querySelector('.group_92_211_2');
var MotionColor = document.querySelector('.e6_31');

/* BOTÃO ARITH */
var Arith = document.getElementById('btn-arith');
var ArithOpen = document.querySelector('.bt_arith_205_148');
var ArithColor = document.querySelector('.e6_37');

/* BOTÃO SHIFT */
var Shift = document.getElementById('btn-shift');
var ShiftOpen = document.querySelector('.group_30_208_43');
var ShiftColor = document.querySelector('.e6_41');

/* BOTÃO OTHER */
var Other = document.getElementById('btn-other');
var OtherOpen = document.querySelector('.other_209_86');
var OtherColor = document.querySelector('.e6_46');


//BOTÕES SUPERIOR

/* BOTÃO JOB */
var Job = document.getElementById('btn_job');
var JobOpen = document.querySelector('.bt_job_218_27');
var JobColor = document.querySelector('.e6_60');

/* BOTÃO EDIT */
var Edit = document.getElementById('btn_edit');
var EditOpen = document.querySelector('.bt_edit_219_50');
var EditColor = document.querySelector('.e6_61');


//BOTÃO MAIN MENU

var JobMN = document.getElementById('btn_job_MN');
var JobMNOpen = document.querySelector('.btn_job_228_4');
var JobMNColor = document.querySelector('.e5_133');

var Deljob = document.getElementById('DEL-job');
var createrjob = document.getElementById('creater-job');
var createrjob2 = document.getElementById('creater-job2');
var CreateOpen = document.querySelector('.group_96_229_38');
var Cancel = document.getElementById('cancel');
var Execute = document.getElementById('executer');
var ExeOpen = document.querySelector('.group_105_231_25');
var ExeFundo = document.querySelector('.rectangle_151_231_2');
var ExeFundo1 = document.querySelector('.rectangle_152_231_3');
var ExeBarra = document.querySelector('.rectangle_153_231_20');

//FUNCÕES

function main(varOn, varFundo, varColor, Btn4on, Btn4) {
      if (varOn.style.display === 'block' && a === 1 && h === 0 && x === 0) {
            varOn.style.display = 'none';
            varFundo.style.display = 'none';
            Btn4.style.display = 'none';
            Btn4on.style.display = 'Block';
            varColor.style.background = 'rgba(104.1249994936052, 103.95144760608673, 103.95144760608673, 1)';
            a = 0;
            if (g === 1) {
                  BtnMain(OpenMN, ColorMN)
            }
            else if (tela === 1) {
                  Exe(ExeOpen)
            }

      } else if (a === 0) {
            varOn.style.display = 'block';
            varFundo.style.display = 'block';
            Btn4.style.display = 'block';
            Btn4on.style.display = 'none';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            a = 1;
            x = 0;
            if (tela === 1) {
                  Exe(ExeOpen)
            }
      }
}

function IfandElse(varOn, varColor) {
      if (varOn.style.display === 'block'){
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
      }
      else if ( b === 1) {
            b = 0;           
            Open.style.display = 'none';
            Color.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            IfandElse(varOn, varColor)
      } else if(f === 1){
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            b = 1;
            Open = varOn;
            Color = varColor;
      }
}

function IfandElse1(varOn, varColor) {
      if (varOn.style.display === 'block'){
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
      }
      else if ( d === 1) {
            d = 0;           
            OpenSup.style.display = 'none';
            ColorSup.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            IfandElse1(varOn, varColor)
      } else {
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            d = 1;
            OpenSup = varOn;
            ColorSup = varColor;
      }
}

function Inflisten(varOn, varColor) {

      if (varOn.style.display === 'block' || f === 1) {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            f = 0;
            IfandElse(Open, Color)
      } else if(h === 0){
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(0, 255, 86.69997811317444, 1)';
            f = 1;
            
      }
}

function BtnMain(varOn, varColor) {
      if (varOn.style.display === 'block' || g === 1) {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            OpenMN.style.display = 'none';
            ColorMN.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            g = 0;
      } else if (g === 0 && h === 0) {
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            g = 1;
            OpenMN = varOn;
            ColorMN = varColor;
      }
}



function create(varOn) {
      if (varOn.style.display === 'block' || h === 1 ) {
            varOn.style.display = 'none';
            h = 0;
      }
      else if (h === 0|| tela === 1)  {
            varOn.style.display = 'block';
            h = 1;
            Exe(ExeOpen)
            BtnMain(JobMNOpen, JobMNColor)
            if (f === 1) {
                  Inflisten(InfListOpen, InfListColor)
            }
      }
}

function Exe(varOn) {
      if (h === 1 || off_tela === 1) {
            varOn.style.display = 'none';
            tela = 0;
            off_tela = 0;
      }
      else if (varOn.style.display === 'block' || tela === 1) {
            if (a === 1) {
                  varOn.style.left = '334px';
                  ExeFundo.style.width = '1065px';
                  ExeFundo1.style.width = '1065px';
                  ExeBarra.style.width = '1063px';
            }
            else if (a === 0) {
                  varOn.style.left = '50px';
                  ExeFundo.style.width = '1350px';
                  ExeFundo1.style.width = '1350px';
                  ExeBarra.style.width = '1347px';
            }

      }
      else if (tela === 0) {
            varOn.style.display = 'block';
            tela = 1;
      }
}


/* BOTÃO EM BREVE... */
Erro1.addEventListener('click', function () {
      alert("EM BREVE...");
});
Erro2.addEventListener('click', function () {
      alert("EM BREVE...");
});
Erro3.addEventListener('click', function () {
      alert("EM BREVE...");
});

Erro4.addEventListener('click', function () {
      alert("EM BREVE...");
});


/* BOTÃO MAIN MENU */
MainMenu.addEventListener('click', function () {
      x = 0;
      main(MainMenuOpen, MainMenuOpenFundo, MainMenuColor, MainMenuBTN4On, MainMenuBTN4)
});
/* BOTÃO IN/OUT */
btn.addEventListener('click', function () {
      IfandElse(InOutOpen, InOutColor)
});

/* BOTÃO IN/OUT */
InfList.addEventListener('click', function () {
      Inflisten(InfListOpen, InfListColor)
});

/* BOTÃO CONTROL */
Control.addEventListener('click', function () {
      IfandElse(ControlOpen, ControlColor)
});

/* BOTÃO DEVICE */
Device.addEventListener('click', function () {
      IfandElse(DeviceOpen, DeviceColor)
});

/* BOTÃO MOTION */
Motion.addEventListener('click', function () {
      IfandElse(MotionOpen, MotionColor)
});

/* BOTÃO ARITH */
Arith.addEventListener('click', function () {
      IfandElse(ArithOpen, ArithColor)
});

/* BOTÃO SHIFT */
Shift.addEventListener('click', function () {
      IfandElse(ShiftOpen, ShiftColor)
});

/* BOTÃO OTHER */
Other.addEventListener('click', function () {
      IfandElse(OtherOpen, OtherColor)
});

// BOTÕES SUPERIOR

/* BOTÃO JOBB */
Job.addEventListener('click', function () {
      IfandElse1(JobOpen, JobColor)
});

/* BOTÃO EDIT */
Edit.addEventListener('click', function () {
      IfandElse1(EditOpen, EditColor)
});

/* BOTÃO JOBB */
JobMN.addEventListener('click', function () {
      BtnMain(JobMNOpen, JobMNColor)
});

Deljob.addEventListener('click', function () {
      off_tela = 1;
      Exe(ExeOpen)
      IfandElse1(OpenSup,ColorSup)
      if(h === 1){
            create(CreateOpen)
      }
});

createrjob.addEventListener('click', function () {
      create(CreateOpen)
});

createrjob2.addEventListener('click', function () {
      x = 1;
      main(MainMenuOpen, MainMenuOpenFundo, MainMenuColor, MainMenuBTN4On, MainMenuBTN4)
      create(CreateOpen)
      IfandElse1(JobOpen, JobColor)
});

Cancel.addEventListener('click', function () {
      create(CreateOpen)
});

Execute.addEventListener('click', function () {
      create(CreateOpen)
      Exe(ExeOpen)
});



