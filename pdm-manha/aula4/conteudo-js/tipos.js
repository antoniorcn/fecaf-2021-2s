let x = 10;         // cria variáveis locais
const nomeAplicacao = "TIPOS DE VARIAVEIS";
const pi = 3.1415;  // cria constante local

console.log("X ==> ", x);

x = 22;
console.log("X ==> ", x);

if (x > 7) { 
    const y1 = 17; // cria constante local
    var y = 15; // cria variável global
    console.log("X é maior que 7");
} else { 
    console.log("X não é maior que 7");
}

console.log("X + Y ==> ", x + y);

