//dessa forma é usado quando tem um css externo
const meuElemento = document.getElementById("meu-elemento");
//classlist representa um conjuto de classe
//todo elemento tem várias propriedades
//um elemeno pode ter mais de uma classe
meuElemento.classList.add("novo-estilo");//adiciona classe novo-estilo
meuElemento.classList.remove("classe");//reove a classe(classe)
meuElemento.classList.toggle("dark-mode");//se tiver darl-mode ele tira, senão inclui
//=-------------------------------------------------------------------------------------
  // evento de botao no javascript
  const botao = document.getElementById("meuBotao");
  botao.addEventListener("click", outraFuncao);
