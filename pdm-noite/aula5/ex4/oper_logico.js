console.log("Sistema de seleção curriculos");

// Candidato
let nome = "Maria Silva";
let idade = 15;
let tempoExperiencia = 6;

let idadeAdequada = idade >= 16;
let experienciaAdequada = tempoExperiencia >= 12;


let aprovadoEntrevista = idadeAdequada || experienciaAdequada;

console.log("Aprovado para entrevista ==> ", aprovadoEntrevista);
