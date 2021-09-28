    //     4  *  1 = 4
    //     4  *  2 = 4
    //     4  *  3 = 4
    //     4  *  4 = 4
    //     4  *  5 = 4
    //     4  *  6 = 4
    //     4  *  7 = 4
    //     4  *  8 = 4
    //     4  *  9 = 4
    //     4  *  10 = 4

    // console.log("4  *  0 = 0");
    // console.log("4  *  1 = 4");
    // console.log("4  *  2 = 8");
    // console.log("4  *  3 = 12");
    // console.log("4  *  4 = 16");
    // console.log("4  *  5 = 20");
    // console.log("4  *  6 = 24");
    // console.log("4  *  7 = 28");
    // console.log("4  *  8 = 32");
    // console.log("4  *  9 = 36");
    // console.log("4  *  10 = 40");


let i = 0;  // ***Inicialização*** do contador do laço
const numero = 32;
console.log("############################")
console.log("### Tabuada do numero", numero, "###");
console.log("############################")
while (i <= 10) { // ***Condição*** do laço
    const resposta = numero * i;
    // console.log(numero, "*", i, "=", resposta); 
    console.log(`${numero} * ${i} = ${resposta}`);
    i = i + 1;  // ***Passo*** do laço
}
