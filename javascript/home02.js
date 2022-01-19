
/*contains retorna um bollean , verifica se o valor da classe existe no atributo do elemento*/ 
function trocar(){
    if(document.querySelector('button').classList.contains('preto')){
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    }
}