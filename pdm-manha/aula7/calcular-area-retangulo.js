
function calcularAreaRetangulo(base, altura) { 
    let area = base * altura;
    console.log(`A area de um retangulo de base ` + 
    `${base} e altura ${altura} é ${area}`);
    return area;
}

// area = base * altura
let b = 44;
console.log("Area do monitor ==>");
calcularAreaRetangulo(b, 29);  // 1276

console.log("Area do fundo da caixa de suco ==>");
let areaFundo = calcularAreaRetangulo(8, 7);
console.log ("Area do fundo ==> ", areaFundo);
let volume = areaFundo * 20;
console.log("Volume da caixa de suco ==>");
console.log(volume);

console.log("Area da tela do celular ==>");
calcularAreaRetangulo(8, 16);

