let idade = 80;

let bebe = idade < 3;
let crianca = idade >= 3 && idade < 12;
let adolescente = idade >= 12 && idade < 18;
let adulto = idade >= 18 && idade < 75;
let idoso = idade >= 75;
// idade < 3 --> bebe
// idade >= 3 E idade < 12  --> crianca
// idade >= 12 E idade < 18 --> adolescente
// idade >= 18 E idade < 75 --> adulto
// idade >= 75 --> idoso

console.log("Bebê ==> ", bebe);
console.log("Criança ==> ", crianca);
console.log("Adolescente ==> ", adolescente);
console.log("Adulto ==> ", adulto);
console.log("Idoso ==> ", idoso);
