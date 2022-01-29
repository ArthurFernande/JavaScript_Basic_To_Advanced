 
 
 //let res =lista.join('-')
//let res =lista.toString()
//let res = lista.indexOf('corante');
//lista.pop();
//lista.shift();
//lista.push('prato')
//lista.splice(1,1);
//lista.concat(lista2);
//lista.sort();
//lista.reverse();
 
 
 
/*
lista2 = lista.map(function (item){ map, vai mapear ou seja, vai rodar esta funcao em todos elementos do array
    return item*2
});
*/

/*
lista2 = lista.filter(function(item) {
    if(item <20){
        return true;
    } else{
        return false;
    }
});
*/
/*
lista2 = lista.every(function(item){   //todo mundo tem que esta de acordo com a condicao >20 , como tem elementos menores , retorna false na hora
    if(item > 20){
        return true;
    } else{
        return false;
    }
});
*/

/*
lista2 = lista.some(function(item){   //se pelo menos um estiver  com a condicao >20 , ja retorna true
    if(item > 20){
        return true;
    } else{
        return false;
    }
});*/


let lista = [

    {nome:'Arthur', id:1, sobrenome:'Fernandes'},
    {nome:'Sonic', id:2, sobrenome:'hedehog'},
    {nome:'Mario', id:3, sobrenome:'bros'}
];
let pessoa = lista.find(function(item){
    if(item.id == 3 ){
        return true;
    }else{
        return false
    }
});

let res =  pessoa;

console.log(res);















 
//treinando conceitos com array
 
/*
 let lista = ['ovo', 'corante', 'farinha', 'massa'];
 let lista2 = ['prato', 'liquidifacador', 'forno']
 let lista3 = []
//adiciono lista
lista.push('manteiga')
//adiciono lista 3
for(let i =0; i < lista.length; i++){
    lista3.push(lista[i]);
}
//adiciono lista 3
for(let i =0; i < lista2.length; i++){
    lista3.push(lista2[i]);
}
//ordeno
lista3.sort()

let res =  lista;
let res2 = lista3;
console.log(res2);
*/
