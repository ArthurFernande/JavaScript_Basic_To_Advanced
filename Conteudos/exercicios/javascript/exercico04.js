
/*
 Forma 1 de resolver

function menu() {
    let menuArea = document.getElementById('menu-area');

    if(menuArea.classList.contains('menu-opened')){
        fecharMenu();
    }else{
        abrirMenu();
    }
    
}
function abrirMenu() {
    document.getElementById('menu-area').classList.add('menu-opened');
}
function fecharMenu() {
    document.getElementById('menu-area').classList.remove('menu-opened');
}
*/

/*Form 2 de resolver*/ 

function menu() {
    let menuArea = document.getElementById('menu-area');

    if(menuArea.style.width == '200px'){
        menuArea.style.width = '0px';
    }else{
        menuArea.style.width = '200px';
    }
}


