/*
// a palavra async existe para definir funcao assincrona
async function resolvePromise1() {//cria uma promise 
    const myPromise1 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
           resolve('Resolvida ');
        },500);
    });
        const resolved = await myPromise1//caso promise seja resulvida ela executa 
 //esse comando
 //para pegar o resultado de resolvda ou rejetada de uma promise tem q usar
 // a palavra await
            .then((result)=>result + 'passando pelo then 1')
            .then((result)=>result + ' e agora acabou')
            .catch((err)=> console.log(err.message))
        return console.log(resolved);
}

 resolvePromise1();
*/
//------------------------------------------------------------------
/*
async function resolvePromise1() {
    const myPromise1 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida ');
        }, 3000);

    });
    let result;
    try {
        result = await myPromise1
            .then((result) => result + 'passando pelo then')
            .then((result) => result + ' e agora acabou')
    } catch (err) {
        result = err.message;
    }
    return console.log(result);
}
resolvePromise1();
*/