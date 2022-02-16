// THIS
// A PALAVRA RESERVADA THIS É UMA REFERÊNCIA DE CONTEXTO
// O THIS quando declarado dentro de um método(OBJETO) ele se refere ao objeto

/*
    CONTEXTO------------------------- REFERÊNCIA
EM UM OBJETO(MÉTODO)-> Referese ao próprio obejto dono do método
SOZINHA -> Objeto global(em navegadores, window)
FUNÇÃO -> Objeto Global
EVENTO -> Elemento que recebeu o evento
*/

/*
const pessoa = {
    firstName: "PAULO",
    lastName : "SOUZA",
    id       : 25,
    fullName : function(){//sempre que uma função ta dentro de um objeo ela é chamada de método
        return this.firstName + " "+ this.lastName;
// qnd usa this dentro do métod ele se refere ao objeto pai do método, nesse caso
// pessoa n propriedade firtName
    },
    getId: function(){
      return  this.id;
    }
};
console.log(pessoa.fullName());
console.log(pessoa.getId());
*/

//console.log(this);// no console ele mostra um objeto vazio, já no navegador ele mostra windon(obejto global)

/*
(function (){
    console.log(this);

})();// dentro da função o ths será objeto global
*/



