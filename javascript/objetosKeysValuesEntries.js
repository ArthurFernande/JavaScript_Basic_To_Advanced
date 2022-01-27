
/* em array
let lista = ['ovo', 'macarrão', 'feijão', 'pipoca']


console.log( Object.entries(lista));

*/

let pessoa= {
    nome: 'Arthur',
    sobrenome: 'Fernandes',
    idade:99
};

//console.log(Object.entries(pessoa))




//String, padStart, padEnd

//let  telefone = '5';

//console.log(telefone.padEnd(9, '*'));
//console.log(telefone.padStart(9, '*'));

//exercicio padStart e end

let cartao  ='1234123412341234'

let lasDigits = cartao.slice(-4);
let cartaoMascarado = lasDigits.padStart(16, '*')

console.log(`Este é o seu cartao? ${cartaoMascarado}`)