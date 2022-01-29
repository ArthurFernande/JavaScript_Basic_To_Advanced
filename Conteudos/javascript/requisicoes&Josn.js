// o que é requisição?

//acessou o goole e gerou um resultado isso é uma requisição,são varias requisicoes feita para gerar um resultado


//codigo sincrono e codigo assincrono

//codigo sincrono
//executo linha por linha na ordem
//let nome = 'Arthur'
//let sobrenome = 'Fernandes'
//let completo = `${nome} ${sobrenome}`


//codigo assincrono
//executa nome, sborenome, pegar temperatura tem que esperar ,vai direto para completo.
//let nome = 'Arthur'
//let sobrenome = 'Fernandes'
//let temperatura = Maquininha.pegarTemperatura(); //linha Assincrona
//let completo = `${nome} ${sobrenome}`

//exemplo assincrono
/*
function foo(){
    console.log("Executando algo assíncrono aqui");
}
function bar(){
    setTimeout(foo, 0); //linha assincrona
    console.log("Alguma coisa por aqui");
    console.log("...");
}
bar();
*/







//callback 

/* I'm gonna call you back = eu te ligo de volta , quando determinada coisa acontecer executa essa função aqui

function alertar() {
    console.log('opa tudo bem ?');
}

let nome ='Arthur'
setTimeout(alertar, 2000);
let sobrenome ='Fernandes'
console.log(`Nome Completo vai ser ${nome} ${sobrenome}`)*/

//promisses

function pegarTemperatura() {
    return new Promise((resolve, reject)=>{
        console.log('pegando temperatura...');

        setTimeout(()=>{
            resolve(' 40 na sombra')
        }, 2000);
    });
}

//usando promisse 
console.log('codigo antes!')

let temp = pegarTemperatura();

console.log('codigo durante')

temp.then((resultado)=>{ //callback
    console.log('temperatura:' +resultado);
})
temp.catch((resultado)=> { //callback
    console.log('eita deu erro!')
})

console.log('codigo depois')

