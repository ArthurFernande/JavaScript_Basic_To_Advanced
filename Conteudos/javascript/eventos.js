function mudando() {
document.querySelector('.botao').innerHTML ='Clicou'
}
function digitou(evento) {
    if(evento.keyCode == 13 && evento.ctrlKey == true){ //tecla enter
        let texto =document.getElementById('campo2').value;
        console.log(texto);
    }
    
}