//DECLARAÇÃO DAS VARIAVEIS

var a = 0; /* Function Main */

var b = 0; /* Function IfandELse */

var c = 0; /* Function Infos */

var d = 0; /* Function IfandELse1 */

var f = 0; /* Function Inflisten */

var g = 0; /* Function BtnMain */

var h = 0; /* Function create */

var i = 0; /* VAGO */

var j = 0; /* addEventListener - Setas */

var p = 0; /* Vago */

var x = 0; /* addEventListener - MainMenu - CreaterJob2*/

var m = 1; /* addEventListener - Pendante (Control) */


var tela = 0;

var off_tela = 0;


// INTERTRAVAMENTO ENTRE OS BOTÕES

var Open;//Botões MAIN MENU
var Color;//Botões MAIN MENU

var OpenMNsl;//Botões MAIN MENU
var ColorMNsl;//Botões MAIN MENU

var OpenSup;//Botões Superior
var ColorSup;//Botões Superior

var OpenMN;//Botões Superior
var ColorMN;//Botões Superior


// INICIO VAR DOS BOTÕES MAIN MENU

// ERRO
var Erro1 = document.getElementById('erro');
var Erro2 = document.getElementById('Erro');
var Seta_D = document.getElementById('Seta_D');
var Seta_E = document.getElementById('Seta_E');

// Pendante
var Pendante = document.getElementById('Pendante');
var PendanteOpen = document.querySelector('.e1_6');

var TelaP = document.getElementById('tela');
var TelaPOpen = document.querySelector('.e106_1119');

/* BOTÃO MAIN MENU */
var MainMenu = document.getElementById('btn-MainMenu');
var MainMenuOpen = document.querySelector('.lt-esq');
var MainMenuOpenFundo = document.querySelector('.e12_37');
var MainMenuColor = document.querySelector('.e5_125');
var MainMenuBTN4On = document.querySelector('.barra-inferior-4btn-on');
var MainMenuBTN4 = document.querySelector('.barra-inferior-4btn');

// BTN Main Menu Slider ( Setas )
var MNslOpen = document.querySelector('.bt_lt_esquerda_2_232_2');
var MNslOpen2 = document.querySelector('.Slide');

// INFORM LIST
var InfList1 = document.getElementById('InformList1');
var InfList1Open = document.querySelector('.e6_59');
var InfList1Color = document.querySelector('.e9_275a');
// INFORM LIST PENDANTE
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

// Deleta JOB
var Deljob = document.getElementById('DEL-job');

// Cria JOB
var createrjob = document.getElementById('creater-job');
var createrjob2 = document.getElementById('creater-job2');
var CreateOpen = document.querySelector('.group_96_229_38');

var Cancel = document.getElementById('cancel');// Cancela Criação JOB
var Execute = document.getElementById('executer');// Executa Criação JOB

// TELA JOB - BOTÂO MAIN MENU -> CREATE JOB
var ExeOpen = document.querySelector('.group_105_231_25');
var ExeFundo = document.querySelector('.rectangle_151_231_2');
var ExeFundo1 = document.querySelector('.rectangle_152_231_3');
var ExeBarra = document.querySelector('.rectangle_153_231_20');

// FIM BOTÂO MAIN MENU


