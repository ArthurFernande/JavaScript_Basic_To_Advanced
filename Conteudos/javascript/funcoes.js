
// conjunto de codigos que vou criar e utilizo quando eu quiser, ex:um botao eu clico e vai rodar os codigos da funcao

//quando eu crio uma funcao posso usar ela em qualquer lugar
function alterar(titulo){
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = titulo;
}
function somar (x, y){
    let total = x + y;
    return total;
}

var resultado = somar(10, 15)

