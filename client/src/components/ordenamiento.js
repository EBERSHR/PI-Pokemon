console.log('Ordenar Asendente');

let array = [
    {id: 6, name: 'charizard', hp: 78, strenght: 109, defense: 78},
    {id: 7, name: 'squirtle', hp: 44, strenght: 50, defense: 65},
    {id: 8, name: 'wartortle', hp: 59, strenght: 65, defense: 80},
    {id: 9, name: 'blastoise', hp: 79, strenght: 85, defense: 100},
    {id: 10, name: 'caterpie', hp: 45, strenght: 20, defense: 35},
    {id: 11, name: 'metapod', hp: 50, strenght: 25, defense: 55},
    {id: 12, name: 'butterfree', hp: 60, strenght: 90, defense: 50},
    {id: 13, name: 'weedle', hp: 40, strenght: 20, defense: 30},
    {id: 14, name: 'kakuna', hp: 45, strenght: 25, defense: 50},
    
]





let a = array;
console.log("Array::::", array);

a.sort((a,b) => {
    if(a.name < b.name) return 1;
    if(a.name > b.name) return -1;

    return 0;
});

console.log("Descendente", a);


a.sort((a,b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;

    return 0;
});

console.log("Acendente", a);
