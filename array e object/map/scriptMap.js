/*
//------------------------------------
// forma que resolvi
var numero = [1,2,5,10];
nova= numero.map((item)=>  item *5);
console.log(nova);
// forma que resolvi
nova2 = numero.map(function(num){
        return num * 10;
});
console.log(nova2);
//---------------------------------------------------------------
*/
//-------------UTILIZANDO MAP PASSANDO ARGUMENTOS THIS
const maca = {//cria objeto
    value: 2,
}
const laranja = {
    value: 1,
}
function mapComThis(arr, thisArg) {//cria funcao q recebe dois parâmetro
    return arr.map(function (item) {//cia funcao callback      q pega item e multiplca pelo this
        return item * this.value;
    }, thisArg);

}
const nums = [1, 2];
console.log('Quando this é Maca com this', mapComThis(nums, maca));
console.log('Quando this é Laranja com this', mapComThis(nums, laranja));
//-------------------------------------------------------------------------
// UTIZANDO SEM O THIS
const nums2 = [30, 50, 200];//cria array
function mapSemThs(arr) {//funcao map sem this 
    return arr.map(function (item) {//funcao callback
        return item * 2;
    });
}
console.log("Map sem this ",mapSemThs(nums2));