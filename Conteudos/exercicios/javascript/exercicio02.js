function fazerAlgo(){
    document.querySelectorAll('.botao')[0].addEventListener('click', addTitulo)
    document.querySelectorAll('.botao')[1].addEventListener('click', addBorda)
    document.querySelectorAll('.botao')[2].addEventListener('click', bordaRadius)
    document.querySelectorAll('.botao')[3].addEventListener('click', bordaShadown)
    document.querySelectorAll('.botao')[4].addEventListener('click', bordaTom)
    document.querySelectorAll('.botao')[5].addEventListener('click', information)
    document.querySelectorAll('.botao')[6].addEventListener('click', resetar)
}

function addTitulo(){
    document.querySelector('.titulo').innerHTML ='Águia Americana'
}
function addBorda() {
    document.querySelector('.imagem').classList.add('borda')
}
function bordaRadius() {
    document.querySelector('.imagem').classList.add('bordaRadius')
}
function bordaShadown() {
    document.querySelector('.imagem').classList.add('sombra')
}
function bordaTom() {
    document.querySelector('.imagem').classList.add('tomImagem')
}
function information() {
    document.querySelector('.infor').innerHTML = 'A águia é o nome comum dado algumas aves de rapina da família Accipitridae, geralmente de grande porte, carnívoras, de grande acuidade visual. O nome é atribuído a animais pertencentes a gêneros diversos e não corresponde a nenhum clade taxonômico '
    document.querySelector('.infor').classList.add('visivel')
}
function resetar() {
    document.querySelector('.titulo').innerHTML =''
    document.querySelector('.infor').innerHTML =''
    document.querySelector('.infor').classList.remove('visivel')
    document.querySelector('.imagem').classList.remove(
        'borda',
        'bordaRadius',
        'sombra',
        'tomImagem'
        )

}