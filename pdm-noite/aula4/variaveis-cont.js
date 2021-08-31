var x;
// var      ==> Variáveis globais (Evite usar)
// let      ==> Variáveis locais
// const    ==> Cria constantes (locais)

const PI = 3.1415;

// const db = DBConnection.create();

const livro = { 
    titulo: "Senhor dos Aneis",
    autor: "Tolkien",
}

livro.titulo = "Sociedade dos poetas mortos";

if ('autor' in livro) { 
    let x = 10; // Variável Global
    console.log("Tem o atributo neste livro");
} else { 
    console.log("Não tem este atributo");
}

console.log("Valor de X ==> ", x);

// livro = null;
// console.log(  livro['titulo']   );

console.log( livro );