function calcularAreaRetangulo(altura, largura) { 
    let area = altura * largura;
    console.log("Area ==>", area);
    return area;
}

console.log("Area da tela do monitor ==>");
let areaMonitor = calcularAreaRetangulo(44, 29); // 1276
console.log("Retornado ==> ", areaMonitor);

console.log("Area da caixa de ovos ==>");
let ovos = calcularAreaRetangulo(5, 4); // undefined
console.log("Retornado ==> ", ovos);

console.log("Então em 3 caixas teremos ==>");
console.log(ovos * 3);