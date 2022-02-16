const par = [1, 5, 7, 10, 8, 12];

function filtraPares(arr) {
    return arr.filter(callback);
}
function callback(item) {// verifca se numeo é par
    return item % 2 === 0;
}
console.log(filtraPares(par));