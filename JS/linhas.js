
function teste() {
      var novoParagrafo = document.createElement("p");

      var novoParagrafo1 = document.createElement("id");

      var texto = document.createTextNode("Este é o conteúdo do paragráfo");

      novoParagrafo.appendChild(texto);

      var body = document.querySelector(".container1");

      body.appendChild(novoParagrafo);

}
