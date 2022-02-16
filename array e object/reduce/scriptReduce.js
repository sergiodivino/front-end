/*
// SOMA NUMEROS 
function somaNumeros(arr) {
  return  arr.reduce(function (prev, current) {
        return prev + current;
    });
}
const arr = [1,2,23];
console.log("Utilizando Reduce",somaNumeros(arr));
*/
//----------------------------------------------------------------------------------------
const lista = [
    {
        name: 'sabao em po',
        preco: 30,

    },
    {
        name: 'cereal',
        preco: 10,
    },
    {
        name: 'tolha',
        preco: 30,
    },
];
const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;

    }, saldoDisponivel)// inicializa cm valor de saldo disponivel
}
console.log(calculaSaldo(saldoDisponivel, lista));