
//arrays

let carros = ['Palio', 'Uno', 'Corola', 'Ferrari'];
//let carros2 = new Array['Palio', 'Uno', 'Corola', 'Ferrari'];

//array com funcoes
let carros3 = [
    'Palio',
    'Uno',
    'Corola',
    'Ferrari',
    function() {
        console.log('testando 1, 2, 3 ....')
    }
];

//array com array
let ingredientes = [
    ['uva','pera', 'maca'],
    ['arroz', 'macarrao']
];

console.log(ingredientes[1][0]);