let temperatura = 36;

let muitoFrio = temperatura < 5;
let frio = temperatura < 16;
let calor = temperatura > 23;
let muitoCalor = temperatura > 29;

let usarCamiseta = frio == false;
let usarBlusa = muitoFrio == true;

console.log("Frio ou calor ?");

console.log("Muito Frio ==> ", muitoFrio);
console.log("Frio ==> ", frio);
console.log("Calor ==> ", calor);
console.log("Muito Calor ==> ", muitoCalor);

console.log("Levar Blusa ==> ", usarBlusa);
console.log("Usar Camiseta ==> ", usarCamiseta);