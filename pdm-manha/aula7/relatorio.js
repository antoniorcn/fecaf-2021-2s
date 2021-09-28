console.log("Inicio do programa");

function cabecalho() {  // Declaração de função
    console.log("################################");
    console.log("#########  Empresa ACME ########");
    console.log("#####  Relatorio de vendas #####");
    console.log("#####  Data 28/09/2021     #####");
    console.log("################################");
}

cabecalho();   // Invocação

for (let i = 20; i <= 25; i++) { 
    console.log("Venda ==> ", i, " R$ 200,000");
}

cabecalho();

for (let i = 30; i <= 35; i++) { 
    console.log("Venda ==> ", i, " R$ 125,000");
}

cabecalho();

for (let i = 40; i <= 45; i++) { 
    console.log("Venda ==> ", i, " R$ 250,000");
}
