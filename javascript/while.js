///vou usar o arquivo html do for para executar os comandos

/*
let html =' '
let c =0;
while( c < 10){
    html += 'Numero: '+c+'<br/>';
    c++;
}
document.getElementById('demo').innerHTML =html;
*/

//tabuada
let resultado = ' ';
let tabuada =5;
let c = 0;


while ( c <=10 ){
    resultado += tabuada + ' X ' + c + ' = ' + (tabuada * c) + '<br/>';
    c++;
}
document.getElementById('demo').innerHTML = resultado;



/*
veja que o for é como um while mais comprimido
*/ 