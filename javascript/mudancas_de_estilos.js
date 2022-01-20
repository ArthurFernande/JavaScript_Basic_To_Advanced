function mudarCor() {
    document.querySelectorAll('#botao')[0].addEventListener('click', corAzul)
    document.querySelectorAll('#botao')[1].addEventListener('click', corVermelha)
    document.querySelectorAll('#botao')[2].addEventListener('click', corVerde)
}

function corAzul() {
    limpar();
    document.querySelector('#titulo').classList.add('azul')
}
function corVermelha() {
    limpar();
    document.querySelector('#titulo').classList.add('vermelho')
}
function corVerde() {
    limpar();
    document.querySelector('#titulo').classList.add('verde')
}
//limpar 
function limpar() {
    document.querySelector('#titulo').classList.remove('vermelho')
    document.querySelector('#titulo').classList.remove('azul')
    document.querySelector('#titulo').classList.remove('verde')
}

//para aparecer um elemento
function mostrar(elemento) {
    elemento.style.display ='none';
    document.getElementById('telefone').style.display = 'block';
}