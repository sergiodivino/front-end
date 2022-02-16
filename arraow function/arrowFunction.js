// ARROW FUNCTION
// É REPRESENTADA POR =>

// exemplo 1
/*
const olaMundo = () => {
    return "ola mundo ";
}
console.log(olaMundo());
*/

/*
//exemplo 2
const olaMundo = () => "ola mundo em uma linha"
console.log(olaMundo());//
// qnd arrow function é escrito em uma linha n precisa de return e {}
// caso tenha um parametro pode dispensar ()
*/

//exemplo 3
const soma = (a,b) => a +b ;
console.log(soma(1,5));

// RESTRIÇÕES DE ARROW FUNCTION
// // ARROW FUNCTION N FAZ HOSTING
// this sempre sera global. Métodos para modificar seu valor n ira funcionar(call, bind e aplly)
// não existe o objeto  "arguments"
//O construtor (ex: new MeuObjeto()) tbm n pode ser utilizado