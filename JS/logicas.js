
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
                  if (tela === 1) {
                        Exe(ExeOpen)
                  }
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

function MNslide(varOn,varOff) {
            varOn.style.display = 'block';
            varOff.style.display = 'none';
            if (g === 1) {
                  BtnMain(JobMNOpen, JobMNColor)
            }
}


function IfandElse(varOn, varColor) {
      if (varOn.style.display === 'block') {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
      }
      else if (b === 1) {
            b = 0;
            Open.style.display = 'none';
            Color.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            IfandElse(varOn, varColor)
      } else if (f === 1) {
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(118.30300390720367, 96.05002999305725, 255, 1)';
            b = 1;
            Open = varOn;
            Color = varColor;
      }
}

function IfandElse1(varOn, varColor) {
      if (varOn.style.display === 'block') {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
      }
      else if (d === 1) {
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

function Inflisten(varOn, varColor, varColor1) {

      if (varOn.style.display === 'block' || f === 1) {
            varOn.style.display = 'none';
            varColor.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            varColor1.style.background = 'rgba(104.12499949336052, 103.95144760608673, 103.95144760608673, 1)';
            f = 0;
            IfandElse(Open, Color)
      } else if (h === 0) {
            varOn.style.display = 'block';
            varColor.style.background = 'rgba(0, 255, 86.69997811317444, 1)';
            varColor1.style.background = 'rgba(0, 255, 86.69997811317444, 1)';
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
      if (varOn.style.display === 'block' || h === 1) {
            varOn.style.display = 'none';
            h = 0;
      }
      else if (h === 0 || tela === 1) {
            varOn.style.display = 'block';

            AnimationEffect
            h = 1;
            Exe(ExeOpen)
            BtnMain(JobMNOpen, JobMNColor)
            if (f === 1) {
                  Inflisten(InfListOpen, InfList1Color, InfListColor)
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




// EVENTOS CLICK's

/* BOTÃO CONTROL PENDANTE */
Pendante.addEventListener('click', function () {
      if (PendanteOpen.classList.contains('hide')) {
            PendanteOpen.classList.add('show');
            PendanteOpen.classList.remove('hide');
      }
      else{
            PendanteOpen.classList.add('hide');
            PendanteOpen.classList.remove('show');
      }
});

/* BOTÃO CONTROL PENDANTE TELA */
TelaP.addEventListener('click', function () {
      PendanteOpen.classList.add('hide');
      PendanteOpen.classList.remove('show');
});


/* BOTÃO EM BREVE... */
Erro1.addEventListener('click', function () {
      alert("EM BREVE...");
});
Erro2.addEventListener('click', function () {
      alert("EM BREVE...");
});




/* BOTÃO MAIN MENU */
MainMenu.addEventListener('click', function () {
      x = 0;
      main(MainMenuOpen, MainMenuOpenFundo, MainMenuColor, MainMenuBTN4On, MainMenuBTN4)
});

/* BOTÃO MAIN MENU - SETAS */

Seta_D.addEventListener('click', function () {
      if(j === 0){ 
            MNslide(MNslOpen, MNslOpen2)
            j = 1;
      }
});

Seta_E.addEventListener('click', function () {
      if(j === 1){ 
            MNslide(MNslOpen2, MNslOpen)
            j = 0;
      }
});

/* BOTÃO IN/OUT */
btn.addEventListener('click', function () {
      IfandElse(InOutOpen, InOutColor)
});

/* BOTÃO Inform List*/
InfList.addEventListener('click', function () {
      Inflisten(InfListOpen, InfList1Color, InfListColor)
});

InfList1.addEventListener('click', function () {
      Inflisten(InfListOpen, InfList1Color,InfListColor)
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
      IfandElse1(OpenSup, ColorSup)
      if (h === 1) {
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
      altera_nome.innerHTML = input_nome;
});



