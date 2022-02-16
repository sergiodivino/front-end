// set
// SÓ ARMAZENA VALORES APENAS VALORES ÚNICOS

const mySet = new Set();
console.log(mySet.add(1));// add -> adicona
mySet.add(2);
mySet.add("sergio");
//console.log(mySet.has("sergio"));// has utilizado para ve um valor dentro do set
console.log(mySet.delete("sergio"));// delete utilizado para deletar

// SET VS ARRAY
/*
-POSSUI VALORES ÚNICOS
-EM VEZ DA PROPRIEDADE LENGTH, CONSULTA-SE O NÚMERO D REGISTROS PELA PROPRIEDADE SIZE
-Não possui os métodos MAP, FILTER, REDUCE E ETC

*/