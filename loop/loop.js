/*
// for loop dentro de elemento iterável(array, strings)
function multiplicadosPorDois(arr) {
    let multiplicados = [];
    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }
    return multiplicados;
}
const meuNumeros = [10, 5, 20, 50];
console.log(multiplicadosPorDois(meuNumeros));
*/

/*
// FOR IN ---- trazendo propriedade
// LOOP ENTRE PROPRIEDADE ENUMERÁVEL DE OBJETOS
function forInExemplo(obj) {
    for (prop in obj) {// prop retorna a propriedade do objeto
        console.log(prop);
    }
}
const meuObjeto = {
    nome: "SÉRGIO",
    idade: "10",
    cidade: "SALVADOR"
}
console.log(forInExemplo(meuObjeto));
*/
/*
// FOR IN ---- trazendo os valores
// LOOP ENTRE PROPRIEDADE ENUMERÁVEL DE OBJETOS
function forInExemplo(obj) {
    for (prop in obj) {// prop retorna a propriedade do objeto
        console.log(obj[prop]);// objs[]traz os valores do objeto
    }
}
const meuObjeto = {
    nome: "SÉRGIO",
    idade: "10",
    cidade: "SALVADOR"
}
console.log(forInExemplo(meuObjeto));
*/

/*
// FOR OF
// LOOP ENTRE ESTRUTURAS ITERÁVEIS (ARRAY, STRINGS)
// solução 1
function logLetras(palavra){
    for (letra of palavra){//separa as letras passada
        console.log(letra);
    }
}
const palavra = "abacaxi";
console.log(logLetras(palavra));
*/

/*
// solução 2
function logNumeros(nums){
    for (num of nums){//separa as letras passada
        console.log(num);
    }
}
const nums = [30, 10, 25, 9];
console.log(logNumeros(nums));
*/

/*
// while 
// EXECUTA INSTRUÇÕES ATÉ QUE A CONDIÇÃO SE TORNE FALSA
function exemploWhile(){
    let num = 0;
    while (num < 5) {
        console.log(num)
        num ++;     
    }
}
exemploWhile();
*/

// DO WHILE
//EXECUTA INSTRUÇÕES ATÉ QUE A CONDIÇÃO SE TORNE FALSA
//PÓREM A PRIEMIRA EXECUÇÃO SEMPRE OCORRE

function exemploDoWhile(){
    let num =6; // variável iniciada acima <=5
    do {
        console.log(num);
        num ++;
    }while (num <= 5)
}
exemploDoWhile();