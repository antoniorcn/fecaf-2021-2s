let aluno1 = {  nome: "João Silva",
                idade: 23,
                ra:"11111" };

console.log("Aluno 1 ==> ", aluno1);

// let aluno2 = aluno1;   // Duas variaveis apontando
                          // para o mesmo objeto

// Cria uma cópia de aluno1
// let aluno2 = {};
// aluno2.nome = aluno1.nome;
// aluno2.ra = aluno1.ra;
// aluno2.idade = aluno1.idade;

let aluno2 = {...aluno1};  // Cria uma cópia de aluno1

// aluno2["ra"] = "22222";
aluno2.ra = "22222";

console.log("Aluno 2 ==> ", aluno2);

console.log("Aluno 1 ==> ", aluno1);