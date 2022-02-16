// METDOS NATVOS DO JAVASCRIPT

//Number()- converte valores em números
//Prompt()- regstra entradas de usuário
//Alert()- mostra mensagem ao usuário
//Templates Strings()- para usar strings junto com expressões

function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n \
3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)\ '));


    if (!operacao || operacao >= 7) {// verfica se digitou opção entre 1 e 6 ou se digitou numero
        alert('Error - operação inválida!')
        calculadora();
    } else {
        // number converte entrada de dados string em inteiro
        let n1 = Number(prompt('insira o primeiro valor: '));// entrada do preimeiro valor
        let n2 = Number(prompt('insira o segundo valor: '));// entrada do segundo valor // number 
        let resultado;

        if (!n1 || !n2) {//verifica se os parâmetros passado são válidos
            alert('Error-Parâmetros inválidos')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${"O resultado da soma é:"}  ${resultado}`)// dentro do alert usa crase para utilizar string + expressão
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${"O resultado da Subtração é:"} ${resultado}`)
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre  ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a  ${resultado}`)
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Dejesa fazer outra operação?\n 1 - sim\n 2 - não');
                if (opcao == 1) {// veriica se o usuario digito sim
                    calculadora();
                } else if (opcao == 2) {// veriica se o usuario digito nao
                    alert('até mais')
                } else {
                    alert('Digite uma opção válida')//chama a funcao novaOperacao novamente
                    novaOperacao();
                }

            }


        }

        // verificador de operação
        /*
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
        */

        // pode utilizar o swit case tbm para verificar opção desejada
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }

    }



}


calculadora();