let a = 10 / 3;   //   3.3333333   => Arredondado para baixo  (3)
                  //               => Arredondado para cima   (4)
let arredondadoBaixo = Math.floor(a); // Quociente
let resto = 10 % 3; // Resto
let arredondadoCima = Math.ceil(a);
// let formatado = a.toLocaleString(undefined, "pt_BR");
let formatado = a.toFixed(2);
console.log("Resultado ==>", a);
console.log("Resultado Formatado ==>", formatado);
console.log("Arredondado para baixo ==>", arredondadoBaixo);
console.log("Arredondado para cima ==>", arredondadoCima);
console.log("Resto ==>", resto);

let contador = 2300;
let multiploDeCem = (contador % 100 == 0);
console.log("Contador ", contador, 
    " é Multiplo de 100 ==> ", multiploDeCem);



