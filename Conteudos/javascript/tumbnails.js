/*function mostrar(){
    let imagem = document.getElementById('imagem').files[0];

    let img =document.createElement('img');//cria a tag img 
    img.src =  URL.createObjectURL(imagem);// so vai
    img.width = 200

    document.getElementById('area').appendChild(img);

    
}*/

//forma 2 de fazer
function mostrar(){
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0]

    reader.onloadend = function (){
        let img =document.createElement('img');
        img.src = reader.result
        img.width = 200
        document.getElementById('area').appendChild(img);
    }
    reader.readAsDataURL(imagem);
}