function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmentros");//cria erro por falta de passar os paramenntros
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if (typeof num !== 'number') throw new TypeError("Passe um parâmetro do tipo número");
        if (arr.length !== num) throw new RangeError("Tamanho do array diferente do parametro passado");
            return arr;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este error é um ReferenceError");
            console.log(error.message);
           
            throw error;
        } else if (error instanceof TypeError) {
            console.log("Este error é um TypeError");
            console.log(error.message);
            throw error;
        } else if (error instanceof RangeError) {
            console.log("Este error é um RangerError");
            console.log(error.message);
            throw error;
        }else{
            console.log("Tipo de error não esperado"+e);
            console.log(error.message);
        }

    }

}

console.log(validaArray([2,3],2));