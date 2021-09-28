const PI = 3.14159;

function calcularAreaCirculo(raio) { 
    let area = raio * raio * PI;
    console.log("Area ==> ", area);
}


console.log("Area do Ring Light ==>")
calcularAreaCirculo(8);

console.log("Area do fundo da garrafa de agua ==>")
calcularAreaCirculo(4);

