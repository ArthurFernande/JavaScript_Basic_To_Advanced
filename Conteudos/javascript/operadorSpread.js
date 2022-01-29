//obs: vou usar o arquivo descontruindo.html


//operadores spread em array
let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 8];

//console.log(outros)

//operadores spread em objeto

let info = {
    nome: 'Arthur',
    sobrenome:'Fernandes',
    idade:99
}

let novaInfo = {
    ...info,
    cidade: 'Campina grande',
    estado: 'Paraiba'

}

//console.log(novaInfo)


//operadores spread em funcoes

function adicionarInfo(info) {
    let novaInfo = {
        ...info,
        status:0,
        token: 'sdfjklsdjf',
        data: '.....'
    }
    return novaInfo;
}

//console.log(adicionarInfo({nome: 'Arthur', sobrenome:'Fernandes'}));

//operadores rest

//function adicionar(...numeros) {
   // console.log(numeros)
//}
//adicionar(5 , 6, 7, 8, 9, 10, 11 , 12, 13, 14);

//exercicio  com uso do operador rest e spread

function adicionar (nomes, ...novosNomes){
    let novaInfor =  [...nomes, ...novosNomes]
    
    return novaInfor
}

let nomes =[ 'Arthur', 'Castiel']

let outras = adicionar(nomes, "Antonio", "Bianca", "Nicole")

//console.log(outras) ;







//Fucoes Includes e repeat


//includes
let lista01 = ['ovo', 'café', 'arroz', 'feijão', 'macarrão']

//console.log(lista01.includes('ovo')); retorn false se nao estiver e true se tiver no array ou string

//repeat
let name1 = 'Arthur ';

console.log(name1.repeat(2));