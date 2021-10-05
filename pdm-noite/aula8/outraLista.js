let times = ["Corinthians", "Palmeiras", 
"São Paulo", "Santos", 
"Portuguesa", "São Caetano",
"Guarani", "Ituano"];

// let campeonato = {"Times": times};
// campeonato['Times'][7] = "Juventus";


// let campeonato = [];
// for (let i = 0; i < times.length; i++) { 
//     let time = times[i];
//     campeonato[i] = time;
// }

let campeonato = [];
for (let i = 0; i < times.length; i++) { 
    let time = times[i];
    campeonato.push(time);
}

campeonato[7] = "Juventus";

console.log("Lista Times ==> ", times);

console.log("Lista Campeonato ==> ", campeonato);