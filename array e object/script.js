// o que são vetores ou array

// como declarar uma array

//let é varial do tipo local
// let array =['segio', 5, true, 50>5, 'roberto', 'reni'];
//console.log(array);

// array pode guardar variios dados e outras array

let array = ['sergio', 10, true, ['array1']];
//sconsole.log(array[0]);// [0] tras o valo que ta no 

// manipulano array
//forech recebe uma função como parametro
//array.forEach(function(item, index  )
//{console.log(item,index)});

//push adiciona item ao final do array
//array.push('salvador');
//.log(array);

// metedo pop remove o ultimo item do array
//array.pop();
//console.log(array);

/// obejtoos possuem propiedades e valores que definem suas características
// objeto em java script fica dentro de {}

//desestruturação -> é quando a propriedade do objeto é atribuido a varial

//criando objeto com sua propriv4vvv97 edade e valor 
let objeto = {
    String: 'sergio dos santos', Number: 10, Boolean: true, array: ["array"],
    objectIterno: { objectIterno: 'objeto interno' }
}
//console.log(objeto);

//maneira de acessar a propriedade do objeto
//console.log(objeto.Number);

// maneira de desetruturar o objeto
// entra dentro da variavel objeto ´
//e pega o que tem na propriedade string

//var string = objeto.String;
//.log(string);

//outra forma de fazer desestruturacao utilizando chaves
// cria uma variavel e denro {coloca a propriedade q deseja buscar}
var { String, Number, Boolean } = objeto;
console.log(String, Number, Boolean + " deu certo");

// Spread: é uma forma de lidar separadamente com elementos
// o que era parte de um array se torna um elemento independente
// usa quando estar chamando a função
function sum(x, y, z) {
    return console.log("utilizando tecnica spread"), x + y + z;
}
const numbers = [1, 2, 3];// Array numbers com tres elementos
console.log(sum(...numbers));/// os 3 pontos antes da variável numbers, é chamda de spread
// os números 1,2,3 conrresponde a variável x,y e z respectivamente

/*
// REST: combina os argumentos em um array
// o q era um elemento independente se torna parte de m array
// usa quando estar declarando a função
function confereTamanho(...args){// função pega todos argumentos passado cm os 3 pontinhos
console.log(args.length, "utilizando tecnica rest");//args pega o tamanho do array
}

confereTamanho();// tamanho do array será zer0
confereTamanho(1,2);//tamanho do array será zer2
confereTamanho(2,3,6,10,50);//tamanho do array será 5
*/

// desestruturação de objetoss
// entre {} podemos filtrar apenas os dados que nos interessam em um objeto

const user = {
    id: 42,
    displarName: 'jhoe',
    fullName: {
        firtName: 'sergio',
        lastName: 'divino'
    }
};

function userId({id}){// retorna o id
    return id;
}

function getFullName({fullName: {firtName: first, lastName: last}}){
    return `${first} ${last}`;// retorna firtName e lastName
}

console.log(userId(user));//chama o método userId e retorna id
console.log(getFullName(user));//chama o método getFullName e retorna nomes

