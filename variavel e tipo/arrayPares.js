function substituiPares(array){
    if(!array) return -1;// sem o length passando null ou undefiner o resultado sera -1
    if(!array.length)return -1;// se aray vazio retorna -1
    for(let i = 0; i < array.length; i++){// percorre o array
        if(array[i]===0){// se arra igual a zero
            console.log("você já é zero ");
        }else if (array[i] % 2 === 0){
            console.log(`Subsituindo ${array[i]} por 0...`)// usando interpolação cm console.log
            array[i] = 0;
        }
    }
        return array;
}
let arr = [0, 0, 1,3,0,7,6 ];// array com valors ou não
console.log(substituiPares(arr));// imprime resultado do array