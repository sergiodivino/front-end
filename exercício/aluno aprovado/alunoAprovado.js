 // exercício 1
 /*
const alunos = [{// array com objeto
    nome: 'joão',
    nota: 5,
    turma: '1b'
},
{
    nome: 'sofia',
    nota: 9,
    turma: '1b',
},
{
    nome: 'paulo',
    nota: 6,
    turma: '2c',
},
{
    nome: 'roberto',
    nota: 3,
    turma: '2c',
},

];

function alunosAprovados(array, media) {
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        const { nota, nome } = array[i];// tecnia de object destructuring
        if (nota >= media) {
            aprovados.push(nome, nota);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));
*/
// exercício 2

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

pessoa1 = {
    nome:  'MARIA',
    idade: 30
}

pessoa2 = {
    nome: 'PAULO',
    idade: 25
}

animal = {
    nome: 'FIONA',
    idade: 5,
    raca: 'pug'
}

console.log(calculaIdade.call(pessoa2, 10));// utilizando call
console.log(calculaIdade.apply(animal,[5]));//utilizando appply