// EXERCICIO MAP
/*
function getAdmins(myMap) {
    let admins = [];
    for ([key, value] of myMap) {
        if (value === 'admin') {
            admins.push(key);//push adiciona a chave ao novo array
        }
    }
    return admins;
}
const myMap = new Map();
myMap.set('sergio', 'admin');
myMap.set('roberto', 'admin');
myMap.set('reni', 'admin');
myMap.set('gustavo', 'admin');
myMap.set('paulo,', 'operador');
console.log(getAdmins(myMap));
*/

const meuArray = [30, 30, 40, 5, 10, 20, 20, 1000];
    function valoresUnicos(arr) {
        const mySet = new Set(arr);
   //  return [...mySet];//  usando a tecnica spread (...) retorna um novo array
        return [mySet];// retorna um set dentro array
    }

    console.log(valoresUnicos(meuArray));