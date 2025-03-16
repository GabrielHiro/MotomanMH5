"use strict";

// INFORMAÇÕES SOBRE OS BOTÕES
// DECLARAÇÃO DAS VARIÁVEIS

// INICIO VAR IN/OUT
var btn = document.getElementById('btn-InOut');
var Dout = document.querySelector('.e6_5');
var DoutInfos = document.querySelector('.infos_dout');
var Wait = document.querySelector('.e6_11');
var WaitInfos = document.querySelector('.infos_wait');

// Variável de controle para alternar a visibilidade
var c = 0;

// FUNÇÕES

/**
 * Alterna a visibilidade de um elemento HTML com base no estado atual e na variável de controle `c`.
 *
 * @param {HTMLElement} element - O elemento HTML cuja visibilidade será alternada.
 */
function alternarVisibilidade(element) {
    if (element.style.display === 'block' && c === 1) {
        element.style.display = 'none';
        c = 0;
    } else if (c === 0) {
        element.style.display = 'block';
        c = 1;
    }
}

/**
 * Adiciona eventos de mouseover e mouseout para alternar a visibilidade das informações.
 *
 * @param {HTMLElement} triggerElement - O elemento que irá disparar os eventos.
 * @param {HTMLElement} targetElement - O elemento cuja visibilidade será alternada.
 */
function adicionarEventosVisibilidade(triggerElement, targetElement) {
    triggerElement.addEventListener('mouseover', function() {
        alternarVisibilidade(targetElement);
    });
    triggerElement.addEventListener('mouseout', function() {
        alternarVisibilidade(targetElement);
    });
}

// INFORMAÇÕES BOTÕES

// Adiciona eventos de mouseover e mouseout para alternar a visibilidade das informações
adicionarEventosVisibilidade(btn, InOutInfos);
adicionarEventosVisibilidade(Dout, DoutInfos);
adicionarEventosVisibilidade(Wait, WaitInfos);