// MANIPULANDO VALOR DO THIS
// exemplo 1
// MÉTODO CALL
/*
const pessoa = {
    nome: "minguel",
};
const animal = {
    nome: "carlos",
};
function getQualquerNome() {
    console.log(this.nome);
}
getQualquerNome.call(pessoa);//call pega nome do obejto passado como parametro
getQualquerNome.call(animal);// pega nome de animal
*/
/*
// exemplo 2
const meuObjeto = {
    num1: 2,
    num2: 4,
};
function soma(a ,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(meuObjeto, 1,5);
*/
/*
//// MÉTODO APPLY
EXEMPLO 1
const pessoa = {
    nome: "DIVINO",
};
const animal = {
    nome: "SANTOS",
};
function getQualquerNome() {
    console.log(this.nome);
}
getQualquerNome.apply(pessoa);//call pega nome do obejto passado como parametro
getQualquerNome.apply(animal);// pega nome de animal
*/

/*
//EXEMPLO 2
// exemplo 2
// É possível passar argumento dentro de um array
const meuObjeto = {
    num1: 2,
    num2: 4,
};
function soma(a ,b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.apply(meuObjeto, [1,5]);// arguemento passado dentro de array
*/

// MÉTODO BIND 
// Clona a estrutura da função onde é chamada e aplica o valor do obejto passado
//como parãmetro

/*
const retornaNomes = function (){
    return this.nome;
};
let bruno = retornaNomes.bind({nome: 'paulo'})// bind clona a função e this retorna o nome 
// no qual passou como parãmetro
console.log(bruno());
*/