let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let listaPares = lista.filter( (item, indice) => {
    // if (item % 2 === 0) { 
    if (indice !== 10) {
        return true;
    } else { 
        return false;
    }
});

console.log(listaPares);