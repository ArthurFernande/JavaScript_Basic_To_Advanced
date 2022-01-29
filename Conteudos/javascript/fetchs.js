//----> para GET
/*
async function loadPosts(){
    document.getElementById('posts').innerHTML = 'Carregando ...';

      //fazendo a requisicao com o await , mesma coisa do codigo documentado abaixo
        let req = await fetch('https://jsonplaceholder.typicode.com/posts'); //é uma promisse , mas vai ficar esperando a promisse executar para continuar
        let json =  await req.json();
        montarBlog(json)


    // usando o then e o catch  e nao usando o assync await
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( (resultado)=>{
            return resultado.json();
        })
        .then ((json) =>{
            montarBlog(json);
            //document.getElementById('posts').innerHTML = json.length+ 'posts';
        })
        .catch( (error)=>{
            console.log('Deu problema');
        });
}

function montarBlog(lista){
    let html = '';

    for (let  i in lista){
        html += '<h3>' +lista[i].title+ '</h3>';
        html += lista[i].body+ '</br>';
        html +='<hr/>';
    }
    document.getElementById('posts').innerHTML = html;
}
*/

//----> para POST

async function inserirPosts() {
    document.getElementById('posts').innerHTML = 'Carregando ...';

   let req = fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
           title: 'titulo de teste',
           body: 'corpo de teste',
           userId: 4
       }),
       headers: {
           'Content-Type': 'application/json'
       }
   });

   let json =  await req.json();

   console.log(json);



}