// tipos de funções

//declaratiiva
// o nome da funcao é obrigatório
/*
function funcao(){
    console.log('Sou uma mensagem d uma função declarativa');
}
funcao();
*/


// EXPRSSÃO DE FUNÇÃO // a nomeação da funcao apos o function é opcional
// SÃO FUNÇÕES ATRIBUIDAS A EXPRESÃO
/*  
var funcao = function funcao(){
        console.log('Sou mensagem de função de expressão');
    }
    funcao();


*/
// ARROW FUNCTION
// função de expressão de sintaxe curta, são anônimas e portanto n pode ser nomeada
// deve ser declarada cm "()" segundo  de "=>" e depois {}
/*
var funcao =()=>{
    console.log('Mensagem de expressão do tipo ARROW FUNCTION');
}
funcao();
*/

// função anônima
// Uma variável pode armazenar uma função
/*
var soma = function (a, b){
    return a + b;// return para a função e retorn um valor
}
console.log(soma(5,15));
*/

// função autoinvocável
// função anônima entre parênteses, seguida por outro par de parênteses, q representa sua chamada]
/*
(
    function () {
        let name = "Digital Innovation One "
        return console.log(name);
    }
)();
*/

// função autoinvocável com parametro
/*
(
    function (a, b) {
        return console.log("a soma é", a + b);
    }
)(1, 2);
*/

// função autoinvocável armazenada em variável
/*
const soma3 = (
    function (a, b) {
        return a + b;
    }
)(50, 50);

console.log(soma3);
*/

// função callback
// quando uma função é passada como argumento para outra

/*
const cal = function (operacao, num1, num2) {//passa 3 parametro
    return operacao(num1, num2);//operacao retorna 2 parametro
}
const soma = function (num1, num2) {
    return num1 + num2;
}
const sub = function (num1, num2) {
    return num1 - num2;
}

const resultSoma = cal(soma, 5, 5);//invocara a funcao cal, chamando a funcao soma
const resultSub = cal(sub, 60, 10);

console.log("O resultado da soma é  " +resultSoma);
console.log("O resultado da subtração é "+resultSub);
*/

// função com valor padrão
/*
function exponencial(array, num = 1) {// qnd num n receber valor for undefined ele assume valor padrao 1
    const result = [];
    for (let i = 0; i < array.length; i++) {
         console.log(result.push(array[i] ** num));//metodo push adiciona novo elemeno ao array
         // elevado a um numeros passado
    }
    return console.log(result);
}
exponencial([1,4,6,10], );
exponencial([1,2,3,4],2);
*/

// objeto "arguments"
//Um array cm todos os parâmetros  passados quando a função foi invocada

function numeroMax() {// retona um númeo maximo dentro dos parametros passados
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return console.log("Número máximo é: ", max);
}

numeroMax(40, 2, 10, 30, 22, 8, 25, 31);