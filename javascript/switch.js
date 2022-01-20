
//parecido com if 

//se eu tenho um valor especifico e tenho varios casos com ele

let dia = 4;
let diaNome = '';
/* MODO 1 DE USAR
switch(dia){
    case 1:
        diaNome ='Segunda-feira';
        break;
    case 2:
        diaNome ='Terça-feira';
        break;
    case 3:
        diaNome ='Quarta-feira';
        break;
    case 4:
        diaNome ='Quinta-feira';
        break;
    case 5:
        diaNome ='Sexta-feira';
        break;
    case 6:
        diaNome ='Sabado';
        break;
    case 7:
        diaNome ='Domingo';
        break;
}*/

/* MODO 2 DE USAR
switch(dia){
   
    case 6:
        diaNome ='Final de semana';
        break;
    case 7:
        diaNome ='Final de Semana';
        break;
    default:
        diaNome ='Dia de semana';
        break;
}*/

//MODO 3 DE USAR
switch(dia){
    case 6:
    case 7:
        diaNome ='Final de Semana';
        break;
    default:
        diaNome ='Dia de semana';
        break;
}
document.getElementById('dia').innerHTML = 'Hoje é '+diaNome;
