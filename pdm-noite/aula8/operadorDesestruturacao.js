let contato1 = {nome: "João Silva", 
                telefone: "11111-11111", 
                email: "joao@teste.com"};

// let nome = contato1.nome;
// let telefone = contato1.telefone;
// let email = contato1.email;

// ({nome, telefone, email} = contato1);

let {nome, telefone, email: correio} = contato1;

nome = "Maria Silva";

// console.log(contato1);
console.log("Nome ==> ", nome);
console.log("Telefone ==> ", telefone);
console.log("Email ==> ", correio);

console.log("Contato ==> ", contato1);


let lista = [1, 2, 3, 5, 8, 13];

// let a = lista[0];
// let b = lista[1];
// let c = lista[2];
// let d = lista[3];
// let e = lista[4];
// let f = lista[5];
// [a, b, c, d, e, f] = [1, 2, 3, 5, 8, 13];

[n1, n2, n3, d, e, f] = lista;

console.log(n1, n2, n3, d, e, f);
