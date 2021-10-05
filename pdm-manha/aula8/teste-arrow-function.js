// import {multiplicar, calcular, calcularAreaRetangulo, calcularAreaRetangulo2} from './funcoes.js';
// import {calcular, multiplicar} from './funcoes';
let matematica = require('./funcoes');

// function calcular(n1, n2, acao) { 
//     let r = 0;
//     if (acao === "adicionar") { 
//         r = n1 + n2;
//     } else if (acao === "subtrair") {
//         r = n1 - n2;
//     } else if (acao === "multiplicar") { 
//         r = n1 * n2;
//     } else if (acao === "dividir") { 
//         r = n1 / n2;
//     } else if (acao === "resto") { 
//         r = n1 % n2;
//     }
//     return r;
// }

// function adicionar(n1, n2) {
//     let r = n1 + n2;
//     return r;
// }

// function resto(n1, n2) {
//     return n1 % n2;
// }

// function multiplicar(n1, n2) {
//     return n1 * n2;
// }

// function calcular(n1, n2, operacao) {
//     return operacao(n1, n2);
// }


// function calcularAreaRetangulo(base, altura) {
//     let area = base * altura;
//     return area;
// }



// let calcularAreaRetangulo2 = (base, altura) => {
//     let area = base * altura;
//     return area;
// }


let r1 = matematica.calcular(20, 40, matematica.multiplicar);
console.log("Resposta 1 ==> ", r1);

// let limpar = ( texto ) => { return texto.trim() };
// let limpar = texto => { return texto.trim() };
// let limpar = texto => texto.trim().toLowerCase().replace("a", "4");
let limpar = texto => texto.trim();

console.log("Sem limpar ==> (", limpar("   ABC    "), ")");

// let r2 = calcular(50, 30, (a, b) => { return a * 2 + b } );
// let r2 = calcular(50, 30, (a, b) => a * 2 + b );
// console.log("Resposta 2 ==> ", r2);

let a1 = matematica.calcularAreaRetangulo(5, 3);
console.log("Area 1 ==> ", a1);

let a2 = matematica.calcularAreaRetangulo2(20, 10);
console.log("Area 2 ==> ", a2);
