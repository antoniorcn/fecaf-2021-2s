/*

Crie uma variável do tipo objeto chamada skeep contendo as seguintes características, e atribua valores numéricos a elas:


energia
velocidade
temperatura
humor


Mostre na tela os valores das características do objeto skeep da seguinte maneira
Energia ==> <valor da energia>
Velocidade==> <valor da velocidade>
Temperatura==> <valor da temperatura>
Humor==> <valor do humor>


*/
let skeep = {energia: 100, velocidade: 0, temperatura: 30, humor: 8};

console.log("Valor do objeto Skeep:");
// console.log(skeep);
console.log("Energia ==> ", skeep.energia);
console.log("Velocidade ==> ", skeep["velocidade"]);
console.log("Temperatura ==> ", skeep.temperatura);
console.log("Humor ==> ", skeep['humor']);