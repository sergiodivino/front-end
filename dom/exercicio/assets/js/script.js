function changeMode() {
    changeClasses();
    changeText();
    // console.log("cliquei");//chamou a funcao q dispara um evento no botao
}
function changeClasses() {
    //toglle inclui classe q n tem ou se tem ele tira
    button.classList.toggle(darkModeClass);//manipulando propriesade css cm javascript
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}
function changeText() {
    const modoClaro = " Modo Claro";
    const modeEscuro = " Modo Escuro";
    if (body.classList.contains(darkModeClass)) {//verifica se body contem dark-mode na lista
        button.innerHTML = modoClaro;
        h1.innerHTML = modeEscuro + " ON";
        return;
    }
    button.innerHTML = modeEscuro;
    h1.innerHTML = modoClaro + " ON";
}
const darkModeClass = "dark-mode";
//console.log(button);//mostra no console se elemento realmente foi selecionado
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];//retorna um array, necessa colocar index
const footer = document.getElementsByTagName("footer")[0];//acessa elemento pelo nome da tag
button.addEventListener('click', changeMode);


