let contato1 = {nome: "João Silva", 
                telefone: "11111-11111", 
                email: "joao@teste.com"};


// let contato2 = contato1;    // Duas variaveis apontando para
                               // o mesmo objeto

let contato2 = {...contato1};   // Copia do objeto contato1

contato2['email'] = "novoemail@teste.com";

console.log("Contato1 ==> ", contato1);

console.log("Contato2 ==> ", contato2);