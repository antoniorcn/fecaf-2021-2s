//                     0       1          2        3
let listaInicial = ["João", "Antonio", "Maria", "Silvia"];

console.log("Lista Inicial ==> ", listaInicial);

// Iterar ==> Acessar todos os elementos de uma lista
let listaAtual = [];
for(let i = 0; i <= 3; i++) { 
    console.log(listaInicial[i]);
    listaAtual[i] = listaInicial[i];
}

//               0        1           2        3 
// listaAtual = ["João", "Alfredo", "Maria", "Silvia"]

// let listaAtual = [...listaInicial]; // Operador Spread

listaAtual[1] = "Alfredo";
console.log("Lista Atual ==> ", listaAtual);
console.log("Lista Inicial ==> ", listaInicial);