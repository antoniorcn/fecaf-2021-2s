console.log("Teste XOR");

let temperatura = 10;
let umidade = 30;
let frio = temperatura < 10;
let calor = temperatura > 30;
let seco = umidade < 40;
let umido = umidade > 70;

let sairCasa = (calor ^ seco);

console.log("Calor ==> ", calor);
console.log("Seco ==> ", seco);
console.log("Sair de Casa ", sairCasa);

// Tabela XOR
// calor   seco    sairCasa
// true    true    false
// true    false   true
// false   true    true
// false   false   false


// Tabela OR
// calor   seco    sairCasa
// true    true    true
// true    false   true
// false   true    true
// false   false   false