

function subirTela(){
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth' 
    });
    
}

const botao = document.querySelector('.scrollbutton');
function aparecer(){
    // caso o scroll esteja em posição maior que 20, ele entra no if
    if(window.scrollY === 0){
        //quando entrar no if, troca o atributo do display para block, assim ficará visível.
        botao.classList.add('invisivel');
    } else {
        // quando não atender a condição do if, então ele esconde novamente o botão
        botao.classList.remove('invisivel');
    }
}

/*
O setInterval aplica um tempo para uma função
assim o if ficará rodando a cada 1s e validando
a condição.
    setInterval(aparecer,1000)
*/

window.addEventListener('scroll', aparecer)

