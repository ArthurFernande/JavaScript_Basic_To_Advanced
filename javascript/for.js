//for loop -tipo1
//for loop array -tipo2


/*variacao loop
let texto ='';

for(let i = 1; i <=10; i++){
    texto = texto + i + '<br/>';
}
*/


/* variacao foor loop array
let carros =['ferrari', 'fusca', 'corola', 'Palio', 'Gol'];

let html = '<ul>';
//vai rodar a quantidade de vezes equivalente a quantidade de elementos 
for(let i in carros){
   html += '<li>'+ carros[i] +'</li>' 
}

html = html + '</ul>';

document.getElementById('demo').innerHTML =html;
*/

//tabuada
let tabuada = 6;
let resultado = " ";

for(let i = 1; i <=10; i++){
    resultado = tabuada + ' X ' + i + ' = ' + (tabuada * i) + '<br/>'
    document.write(resultado);
}

document.getElementById("demo").innerHTML(resultado);

