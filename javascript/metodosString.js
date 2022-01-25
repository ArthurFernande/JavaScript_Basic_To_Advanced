
//problema 01 resolvido de digitar e e verificar se esta contido
function verify() {
    let name = document.querySelector('#name').value;
    let search = document.querySelector('#search').value;
    let result = name.indexOf(search);
    let text = '';
    if (result === -1) {
    text = 'Não achou';
    } else {
    text = 'Achou';
    }
    document.querySelector('#text').innerHTML = text;
}
//-------------------------------------------------ESTUDANDO------------------------------------------------------------------
/*
nome.length;  para tamanho da string
nome.indexOf('Fernandes'); a posicao que o texto se encontra, ele comeca, se ele nao achar ele retorn -1
*/

//-----------------trabalhando com os indices da string
/*
let nome = 'Arthur Fernandes de Andrade';
let resultado =' ';

if(nome.indexOf('Fernandes') > -1){
    resultado ='Achou';
}else{
    resultado ='Não Achou';
}

console.log(resultado)
*/

//-----------------trabalhando como  extrarir informacoes da string
/*let nome = 'Arthur Fernandes de Andrade';
//let resultado = nome.slice(0,20);
//let resultado = nome.substring(0,10);
//let resultado = nome.substr(-10,8);

console.log(resultado)
*/

//-----------------trabalhando como  substituir informacoes da string

//let resultado = nome.replace('Fernandes', 'Silva');
//let resultado = nome.toUpperCase();
//let resultado = nome.concat(' Ferreira');
//let resultado = nome.trim();
//let resultado = nome.charAt(5);

var nome = 'Arthur Fernandes de Andrade';
var resultado = ' '
for(let i =0; i <= nome.length-1; i++){
    if(nome.charAt(i) == ' '){
        resultado += nome[i].replace(' ', '-');
    }else{
        resultado += nome[i];
    }
}

console.log(resultado)