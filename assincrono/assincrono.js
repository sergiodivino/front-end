// que não ocorre ou não se efetiva ao mesmo tempo
//javascript roda de maneira síncrona// termina um processo e comeca outro

//---------------PROMISE-------------------------------------------------
// objeto de processamento assíncrono
//inicialmente, seu valor é desconhecido. Ela pode, então, ser RESOLVIDA ou REJEITADA
// promise pode ter estados
//-1(pending) pedente, 2-(fullfilled)completada,3-(rejected) rejeitada
// o resultado de uma promise será outra promise

/*
async function resolvePromise(){ //async define função assincrona
    const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve("Resolvida!");
    }, 3000);
});

let result;
    try{
    result = await myPromise// await para o codigo e espera
    // promise resolver|| await da o resultado da promise
            .then((result) => result + "passando pelo then")
            .then((result) => result + "e agora acabou!")
    }catch(err){
        result = err.message;   
    }
        return result;
}
resolvePromise();
*/
//------------------------------------------------------------------------
// API-Application Programming Interface
//Uma API intermedia os resultados back-end com o q é paresentado 
//no front-end e acessa por meios de URLs
// Normalmente retorna seus dados no formato .json, portanto precisameos 
//tratar esses dados quando os recebemos
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// MÉTODO FETCH
/* 
fetch (url, optios)//recebe uma url e algumas opçoes
    .then(response => response.json)//necessário converter string para json
    .then(json => console.log(json))
// retorna uma promise
*/
//-------------------------------------------------------------------------
//-----------------EXERCICIO-----------------------------------------------

const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    try {
        
        const data = await fetch(BASE_URL);//passando link da API
        const json = await data.json();//pega link e converte em json
        return json[0].url;//pega imagem comprimida
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async ()=>{
      //img.src = await getCats();
    const img = document.getElementById('cat');      
	img.src = await getCats();
   };
catBtn.addEventListener('click', loadImg);
loadImg();

//----------------------------------------------------------------------------
/*
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
*/