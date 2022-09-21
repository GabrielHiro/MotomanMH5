
function teste(){
      var novoParagrafo = document.createElement("p");

      var novoParagrafo1 = document.createElement("id");

      var texto = document.createTextNode("Este é o conteúdo do paragráfo");

      novoParagrafo.appendChild(texto);

      console.log(novoParagrafo);

      var body = document.querySelector(".container1");

      console.log(body);

      body.appendChild(novoParagrafo);
      novoParagrafo.appendChild(novoParagrafo1);

      // inserir em um container

      var container = document.getElementById("container");

      console.log(container);

      var el = document.createElement("span");

      el.appendChild(document.createTextNode("A"));

      console.log(el);

      container.appendChild(el);
}