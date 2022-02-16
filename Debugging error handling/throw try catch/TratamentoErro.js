//--------------------------------------------------------------------------------------------------
// TRATANDO ERRO COM THROW
/*
function verificaPalindromo(string){
    if(!string) throw "String inválida";// trrow trata a string invalida como erro
    return string === string.split('').reverse().join('');
}
console.log(verificaPalindromo(''));
*/
//--------------------------------------------------------------------------------------------
/*
// TRATANDO ERRO COM TRAY CATCH
function verificaPalindromo(string) {
    if (!string) throw "String inválida ";// trrow trata a string invalida como erro
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(string) {
    try {
        console.log(verificaPalindromo(string));
    } catch (error) {
        // console.log(error)// pega a mensagem de erro tratada em throw
        throw error;// outra forma de pegar o erro
    }
}
tryCatchExemplo("");
*/
/*
//---------------------------------------------------------------------------------------------------
// FINALLY- É UMA INSTRUÇÃO Q SERÁ CHAMADA INDEPENDENTE SE TERÁ ERROR OU NÃO
function verificaPalindromo(string) {
    if (!string) throw "String inválida ";// trrow trata a string invalida como erro
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(string) {
    try {        
        console.log(verificaPalindromo(string));
    } catch (error) {
     console.log(error)// pega a mensagem de erro tratada em throw
       // throw error;// outra forma de pegar o erro
    } finally {
        console.log('A String enviada foi: ' + string);
        //finally executa instrução Sindependente se estiver erro ou não
    }
}
tryCatchExemplo("ala");
*/
//----------------------------------------------------------------------------------------------------
// MANEIRA DE CRIAR UM OBJETO ERROR PERSONALIZADO
//new Error(message, fileName, lineNumber)// os parametros são opcionais
// fileName, lineNumber- n é padrão- verificar documentaçao para compatibilização de navegador

const meuErro = new Error('Mensagem inválida');
meuErro.name = 'MensagemErrada';// dando nome ao tipo de error
meuErro.stack// stack significa pilha e diz linha do error
throw meuErro;// lança a mensagem no console



