// vou usar o html de array.html


//objeto

//objeto com funcoes
let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado: false,
    ligar: function() {
        console.log('Ligando o '+this.modelo)
        this.ligado=true;
        console.log('vrum vrum')
    },
    acelerar: function() {
        if(this.ligado == true){
            console.log('Riiiiii')
        }else {
            console.log(this.nome+ ' ' +this.modelo+ ' não esta ligado!')
        }
    }
};
carro.ligar();
carro.acelerar();

//veja document é um objeto com a funcao getElementById passando titulo na funcao , aitenho o objeto
//document.getElementById('titulo').style.display='block';

//colocando objeto dentro de um array

let carros = [
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Meriva', modelo:'wolkswaguen'},
    {nome:'Gol', modelo:'wolvks'},
    {nome:'Hiundai', modelo:'hb20'},

];
console.log(carros[2].modelo)
