function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){

        window.alert('Erro verifique os daods e tente novamente !')

    }else{
        //pego o name dos input tipo radio 'readesex' depois calculo a idade e crio uma variavel genero vazia
        var fsex = document.getElementsByName('radesex')
        var idade = ano - Number(fano.value)
        var genero =''
        //criei um img com id foto, e a mesma coisa que ir na segunda div e ir colocar uma tag de imagem com um id foto
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')
        //
        //se for homem
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //crianca
                image.setAttribute('src', '../images/foto-bebe-m.png')
            }else if( idade <21){
                //jovem
                image.setAttribute('src', '../images/foto-jovem-m.png')
            }else if( idade < 50){
                //adulto
                image.setAttribute('src', '../images/foto-adulto-m.png')
            }else{
                //idoso
                image.setAttribute('src', '../images/foto-idoso-m.png')
            }
        }
        //se for mulher
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //crianca
                image.setAttribute('src', '../images/foto-bebe-f.png')
            }else if(idade <21){
                //jovem
                image.setAttribute('src', '../images/foto-jovem-f.png')
            }else if(idade<50){
                //adulto
                image.setAttribute('src', '../images/foto-adulto-f.png')
            }else{
                //idoso
                image.setAttribute('src', '../images/foto-idoso-f.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        //abaixo eu adiciono um item logo depois de modificar a div res
        res.appendChild(image)
    }
}