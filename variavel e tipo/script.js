
//solução 1
function verificarPalindromo1(string) {
    console.log("solução 1");
    if (!string) return "string inexistente 1";
    // metodo split separa as letras,
    // metedo reverse coloca em ordem reversa e join junta as letras
    let a = string.split("").reverse().join("");// === string;

    if (string === a) {
        console.log(string + " É UM PALINDROMO ");
    } else {
        console.log(string + " NÃO É PALINDRO ");
    }
}
console.log(verificarPalindromo1("ROSILDA"));

// solução 2

/*
function verificarPalindromo2(palavra) {
    console.log("solução 2");
    var palavra = prompt("Digite uma palavra");// abre uma caixa no navegador
    if (!palavra) return "String não é válida";// retorna mensagem de string não válida

    let compara = palavra.split("").reverse().join("");
    if (compara === palavra) {
        alert(`${palavra} É UM PALINDROMO`);
        //  console.log(palavra+" É UM PALINDROMO ");
    } else {
        alert(`${palavra} NÃO É PALINDRO`);
        //    console.log(palavra + " NÃO É PALINDRO ");
    }
}
console.log(verificarPalindromo2("palavra"));
*/

////  solução 3

function verificarPalindromo3(string) {
    console.log("solução 3");
    if (!string) return "string não é válida"

    for (let i = 0; i < string.length / 2; i++) {//pega o tamanho da string e divide por 2
        if (string[i] !== string[string.length - 1 - i]) {//vifica se o 1° e úlimo caractere é diferente ou igual
            // string[string.length - 1 -i] pega o ultimo caractere para comparar 
            return false + " n é palindromo solucao 3";// se o 1° caractere e o último de diferente
        }

    }
    return console.log("  é polindromo solução 3");// se o 1° caractere e o último de igual
    //  }
}
console.log(verificarPalindromo3("ama"));