let aluno = { 
    nome: "João Silva",
    telefone: "11111111",
    ra: "111111",
    idade: 23
}

// let idade = aluno.idade;
// let nome = aluno.nome;
// let ra = aluno.ra;
// let telefone = aluno.telefone;

// let {nome, telefone, ra, idade} = aluno;

// let {nome, telefone, idade} = aluno;
// let matricula = aluno.ra;
let {nome, telefone, idade, ra:matricula} = aluno;

console.log("Nome ==> ", nome);
console.log("Telefone ==> ", telefone);
console.log("Ra ==> ", matricula);
console.log("Idade ==> ", idade);