/*
// solução 1
function numeroPositivo(num){
    let resultado;
    if(num < 0){
        resultado = false;
    }else {
        resultado = true;
    }
    return console.log(resultado);
}
numeroPositivo(-1);
*/

/*
// soução 2
function numeroPositivo(num){
    let resultado;
        const ehNegativo = num < 0; //armazenando condicional em variável
        if(ehNegativo){
            resultado = false;
        }else{
            resultado = true;
        }
        return console.log(resultado);
}
numeroPositivo(20);
*/
/*
//solução 3
function numeroPositivo(num){
    const ehNegativo = num < 0;// armazenando condicional em variável
        if(ehNegativo){
            return console.log(false);
        }
        return console.log(true);
}
numeroPositivo(10);
*/
/*
//solução 4
function numeroPositivo(num){
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;
    if(ehNegativo){
        return console.log("Esse número é negativo");
    }else if(!ehNegativo && maiorQueDez){
        return console.log("Número positivo e maior que 10");
    }
    return console.log("Esse número é positivo");
}
numeroPositivo(11);
*/

//       SWITCH CASE
// Equivale a uma comparação de tipo e valor (===), sempre precisa de valor default
// ideal quando precisa comparar muitos valores

/*
function getAnimal(id){
    switch (id) {
        case 1:
            return "cão";
            break;
        case 2:
            return "gato";    
            break;
        case 3:
            return "pássaro";
            break;
        default:
            return "peixe";
            break;
    }
    
}

console.log(getAnimal(1));
console.log(getAnimal(2));
console.log(getAnimal("1"));
*/

