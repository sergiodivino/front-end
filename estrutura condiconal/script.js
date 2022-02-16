var jogador1 = 10;
var jogador2 = 0;
var placar;

/*
// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("os jogadaores são validos"):
console.log("jogadores inválidos");

if (jogador1 > 0 && jogador2 ==0) {
    console.log("jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
  
} else if (jogador2 > 0 && jogador1 ==0) {
    console.log("jogador 2 marcou ponto!");
    placar = jogador2 > jogador1;

}else {
    console.log("ninguem marcou ponto!");
}
 // usando switch
switch(placar){
        case placar = jogador1 > jogador2:
            console.log("jogador 1 ganhou");
            break;      
        case placar = jogador2 > jogador1:// ESPERA DOS PONTO NO FINAL
            console.log("jogador 2 ganhou");
            break;
       default:
           console.log("ninguem ganhou ");
}
*/

                    // usando estrutura de repatição
// crinnado array
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5' ];
let objeto = {propriedade: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', propriedade4: 'valor4'}

// for executa uma instrução até que ela seja falsa
/*
for(let indice = 0; indice < array.length; indice ++){
console.log(indice);
}
*/

// for in -- funciona como uma repatição a partir de uma propriedade
/*
for(let i in array){
console.log(i);
}

for(i in objeto){// cra uma varavel de estado chamada i e dentro de objeto percorre cada propriedade do objeto
    console.log(i);
}
*/

/*
// fot/of executa repetição a partir de um valor com array
for (i of array){// of pega os valores do array 
    console.log(i);
}

// for/of com object
for(i of objeto.propriedade){// objeto . propriedade para pegar o valor dentro do objeto 
    //no console sai em cada lnha
    console.log(i);
}

*/

//WHLE executa uma instrução "enquanto" determinada condição for verdadeira,
// a verificação é antes da execução

var a = 0
while (a < 5 ){
    a++;
    console.log(a+" com while");
}

//DO/WHILE executa uma instrução "ate que" determinada condição seja falsa
// a verificação é feita depois da execução 

do {
    a++;
    console.log(a + " com DO/WHILE");
}while (a  < 10)
