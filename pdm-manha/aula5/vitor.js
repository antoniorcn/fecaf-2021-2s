let peso = 25;
let peso2 = 70;

let muitoMagro1 = peso <= 30;
let magro1 = peso <= 55;
let saudavel1 = peso <= 99;
let gordo1 = peso < 120;
let obeso1 = peso >= 120;

console.log("Ele é muito Magro? ", muitoMagro1);
console.log("Ele é Magro? ", magro1);
console.log("Ele é Saudavel? ", saudavel1);
console.log("Ele é Gordo? ", gordo1);
console.log("Ele é obeso? ", obeso1);

let muitoMagro2 = peso2 <= 30;
let magro2 = peso2 <= 55;
let saudavel2 = peso2 <= 99;
let gordo2 = peso2 >= 100;
let obeso2 = peso2 >= 120;

console.log("Ela é muito Magro? ", muitoMagro2);
console.log("Ela é Magro? ", magro2);
console.log("Ela é Saudavel? ", saudavel2);
console.log("Ela é Gordo? ", gordo2);
console.log("Ela é obeso? ", obeso2);

let comer1 = muitoMagro1 && magro1;
let seCuidar1 = muitoMagro1 || obeso1;
let dieta1 = gordo1 && obeso1;
let quaseSaudavel1 = magro1 || gordo1;

console.log("Ele Precisa Comer! ", comer1);
console.log("Ele Precisa se cuidar! ", seCuidar1);
console.log("Ele Precisa fazer dieta! ", dieta1);
console.log("Falta pouco para ele ficar saudavel! ", quaseSaudavel1);

let comer2 = muitoMagro2 && magro2;
let seCuidar2 = muitoMagro2 || obeso2;
let dieta2 = gordo2 && obeso2;
let quaseSaudavel2 = magro2 || gordo2;

console.log("Ela Precisa Comer! ", comer2);
console.log("Ela Precisa se cuidar! ", seCuidar2);
console.log("Ela Precisa fazer dieta! ", dieta2);
console.log("Falta pouco para ela ficar saudavel! ", quaseSaudavel2);