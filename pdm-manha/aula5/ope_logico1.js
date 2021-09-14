let temperatura = 4;
let humidade = 10;

let muitoFrio = temperatura < 5;
let frio = temperatura < 16;
let calor = temperatura > 23;
let muitoCalor = temperatura > 29;
let naoFrio = ! frio;

let cansado = humidade < 15;
let disposto = humidade > 30;

// Tabela Verdade do OU EXCLUSIVO (XOR) ^
// cansado         calor       BeberMaisAgua
// true            false       1
// false           true        1
// false           false       0
// true            true        0


let dormirAteTarde = muitoFrio && cansado;
let dormirMaisCedo = cansado || muitoCalor;

let usarCamiseta = frio == false;
let usarBlusa = muitoFrio == true;

console.log("Frio ou calor ?");
console.log("Temperatura ==> ", temperatura);
console.log("Humidade ==> ", humidade);

console.log("Muito Frio ==> ", muitoFrio);
console.log("Frio ==> ", frio);
console.log("Calor ==> ", calor);
console.log("Muito Calor ==> ", muitoCalor);
console.log("Não está frio ==> ", naoFrio);
console.log("Cansado ==> ", cansado);
console.log("Disposto ==> ", disposto);
console.log("Dormir mais cedo ==> ", dormirMaisCedo);
console.log("Dormir até tarde ==> ", dormirAteTarde);

console.log("Levar Blusa ==> ", usarBlusa);
console.log("Usar Camiseta ==> ", usarCamiseta);