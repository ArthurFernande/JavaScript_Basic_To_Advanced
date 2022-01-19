function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if(hora >= 0 && hora <12){
        img.src = '../images/manha.png'
        document.body.style.background = '#f5c172'
    }else if(hora >=12 && hora <= 18){
        img.src = '../images/tarde.png'
        document.body.style.background = '#7b464a'
    }else {
        img.src = '../images/noite.png'
        document.body.style.background = '#102446'
    }
}
