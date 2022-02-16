

function comparaNumeros(nun1, nun2) {
    if(!nun1 || !nun2) return 'Defina os números maior que zero';
    const primeiraFrase = criaPrimiraFrase(nun1, nun2)
    const segundaFrase = criaSegundaFrase(nun1, nun2)
        return `${primeiraFrase} ${segundaFrase}`//concatena as duas frases
    }

function criaPrimiraFrase(nun1, nun2){
    let saoIguais = ''; // cria string vazia 
        if(nun1 !== nun2){// veriica se não são igais ou iguais
            saoIguais = 'não';
        }
        return `Os números ${nun1} e  ${nun2} ${saoIguais} são iguais`
}

function criaSegundaFrase(nun1,nun2){
        const soma = nun1 + nun2;

        let resultado10 = 'menor';// varia com valor padrão
        let resultado20 = 'menor';
        const compara10 = soma >10;
        const compara20 = soma >20;

        if(compara10){// verifica se a soma é maior que 10
            resultado10 = 'maior';//se soma maior que 10 altera o valor de menor para maior
        }
        if(compara20){
            resultado20 = 'maior';// altera o valor de menor para maior
        }
        return `Sua soma è ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20 `
}


console.log(comparaNumeros(2,3));  // imprime resultado no console
