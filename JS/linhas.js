"use strict";
/**
 *  AQUI DEIXO PARA VOCÊ CONTINUAREM O PROJETO, FAÇAM AGORA O ADIÇÃO DE LINHAS DINÂMICAS E REMOÇÃO DE LINHAS DINÂMICAS
 *  E TAMBÉM A ALTERAÇÃO DE TEXTO DE LINHAS DINÂMICAS. 
 *    Dica:(deixa dinamico com blocos se possivel, os alunos vão aprender melhor se tiver blocos para colocar na tela.) =) ass. Hiro
 */

// Função auxiliar para alternar a exibição de elementos
function toggleDisplay(element, displayStyle) {
    element.style.display = displayStyle;
}

/**
 * Função para criar e adicionar um novo parágrafo a um contêiner específico.
 */
function adicionarParagrafo() {
    // Cria um novo elemento de parágrafo
    var novoParagrafo = document.createElement("p");

    // Cria um nó de texto com o conteúdo do parágrafo
    var texto = document.createTextNode("Este é o conteúdo do parágrafo");

    // Adiciona o nó de texto ao novo parágrafo
    novoParagrafo.appendChild(texto);

    // Adiciona uma classe ao parágrafo para facilitar a manipulação
    novoParagrafo.classList.add("paragrafo-dinamico");

    // Seleciona o contêiner onde o novo parágrafo será adicionado
    var container = document.querySelector(".container1");

    // Adiciona o novo parágrafo ao contêiner
    container.appendChild(novoParagrafo);
}

/**
 * Função para remover o parágrafo adicionado dinamicamente.
 */
function removerParagrafo() {
    // Seleciona o parágrafo adicionado dinamicamente
    var paragrafo = document.querySelector(".paragrafo-dinamico");

    // Remove o parágrafo se ele existir
    if (paragrafo) {
        paragrafo.remove();
    } else {
        console.log("Parágrafo não encontrado.");
    }
}

/**
 * Função para alterar o texto do parágrafo adicionado dinamicamente.
 */
function alterarTextoParagrafo(novoTexto) {
    // Seleciona o parágrafo adicionado dinamicamente
    var paragrafo = document.querySelector(".paragrafo-dinamico");

    // Altera o texto do parágrafo se ele existir
    if (paragrafo) {
        paragrafo.textContent = novoTexto;
    } else {
        console.log("Parágrafo não encontrado.");
    }
}

// Exemplo de uso das funções
adicionarParagrafo();
alterarTextoParagrafo("Novo conteúdo do parágrafo");
removerParagrafo();
