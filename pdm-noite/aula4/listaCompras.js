let listaCompras = ["Maçãs", 
    'Bananas', 
    "Coca-cola", 
    "Big Mac do Mc Donnald's",
    "Barrinha de Cereal",
    "Lata Atum"];

// listaCompras[6] = "Nutella";
listaCompras.push("Nutella", "Teste");

console.log(listaCompras);

// listaCompras.splice(5, 0, "Pó de Café");
listaCompras.splice(3, 2);

console.log(listaCompras);

console.log("Lanche ==> ", listaCompras[3]);