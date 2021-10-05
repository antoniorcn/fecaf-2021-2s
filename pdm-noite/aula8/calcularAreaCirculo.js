// area = PI * raio ²
// const PI = 3.14159;

// Math.pow(10, 3) ==> power ==> elevar 10³ => 1000

// function calcularAreaCirculo(raio) {
//     let area = Math.PI * Math.pow(raio, 2);
//     // console.log("Area ==> ", area);
//     return area;
// }

//      arrow   function
const calcularAreaCirculo = (raio) => {
    let area = Math.PI * Math.pow(raio, 2);
    // console.log("Area ==> ", area);
    return area;
}



// calcularAreaCirculo(8);
// console.log(area); // alto acoplamento 

let area1 = calcularAreaCirculo(4); // undefined
console.log("Area do raio 4 ==> ", area1);

let area2 = calcularAreaCirculo(2);
console.log("Area do raio 2 ==> ", area2);

let area3 = calcularAreaCirculo(5);
console.log("Area do raio 5 ==> ", area3);
