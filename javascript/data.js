/*
let d = new Date();

//d.setDate( d.getDate() + 10);
//d.setHours(d.getHours() + 1500);



let novoValor = d;



console.log(novoValor);
*/

//Parte de Matematica
//let valor = Math.ceil(3.01);
//let valor = Math.round(3.99);
//let valor = Math.floor(3.99);
//let valor = Math.abs(-58)
//let valor = Math.min(100, 58, 25)
//faco numeros aleatorios que so voa ate 100 e arredondo para baixo
//let valor = Math.floor( Math.random() * 100);
//console.log(valor);
/*
const numeros = [10, 20, 37, 61, 2, 89, 4];

const minimo = Math.min(...numeros);
const maximo = Math.max(...numeros);
console.log(maximo);
*/

/*INTERVALOS

let timer;

function comecar(){
    timer = setInterval(showTime, 1000); //1000 é 1 segundo , ou seja vai executar de 1 em 1 segundo
}

function parar(){
    clearInterval(timer);
}

function showTime() {

    let d = new Date();
    let h = d.getHours();
    let m= d.getMinutes();
    let s = d.getSeconds();
    let text = h+': '+m+': '+s;
    document.querySelector('.demo').innerHTML = text;
}
 */

function comecar(){

    setTimeout( function(){

       document.querySelector('.demo').innerHTML ='Rodou!';
    
    }, 2000);
}


