

/*desconstruindo objetos

let pessoa = {
    nome : 'Arthur',
    sobrenome : 'Andrade',
    idade: 90,
    social:{
    facebook: 'ufcg',
    instagram: {
        url: '@Arthur',
        seguidores:1000
    }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

//desconstruindo objetos
//let  {nome, sobrenome, idade = 0} = pessoa;
//console.log(nome, sobrenome, idade);
//let {facebook, instagram} = pessoa.social;  //desconstruir objeto do objeto
//let  {nome, idade, social:{instagram}} = pessoa;
//let  {nome,idade,social:{instagram:{url: instagram, seguidores}} } = pessoa;
//console.log(nome, idade, instagram, seguidores);

function pegarNomeCompeto({nome,sobrenome='pereira',social:{instagram:{url:instagram}}}){
    return `${nome} ${sobrenome} Siga em ${instagram}`;
}

console.log(pegarNomeCompeto(pessoa));
*/






/*desconstruindo o arrays

//let info = ['Arthur Fernandes', 'Boniekly', 'Lacerda', '@Andrade'];

//let  [nomeCompleto, , ,instagram] = info;

//console.log(nomeCompleto, instagram);


function criar() {
    return [1, 2, 3];
}

let[a, b, c] = criar();

console.log(a,b,c);
*/





/* Arrow Functions */

/*
maneira 1
function somar(x, y) {
    return x + y
}
*/

/*
maneira 2
let somar = function (x,y) {
    return x+ y
}
*/

/*
maneira 3
let somar = (x, y) => {
    return x + y;
}

maenira 4
let somar =(x, y) => x + y;
 */


//exemplos com funcao arrow com nomes
//let letrasNome = (nome) =>{
 //   return nome.length;
//}
//let letrasNome = (nome) => nome.length;

//console.log(letrasNome('Arthur Fernandes'));



let n = [30, 45, 38, 69, 486, 987];
/*
modo1 usando filter 
let resultado =  n.filter (function (item) {
    if( item % 2 == 0){
        return true;
    }else {
        return false
    }
});

modo 2 usando arrow
let resultado = n.filter(a => {
    if( a % 2 == 0){
        return true;
    }else {
        return false
    }
})

modo 3 usando arrow function de maneira mais eficiente

let resultado = n.filter(a => a % 2 == 0 ? true: false)
*/



console.log(resultado);