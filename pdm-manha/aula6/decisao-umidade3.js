let umidade = 92;
console.log("Umidade ==> ", umidade);

if (umidade >= 0 && umidade <= 100) { 
    if (umidade > 90) {
        console.log("Está muito úmido");
    } else if (umidade > 70 && umidade <= 90) {
        console.log("Está úmido");
    } else if (umidade > 30 && umidade <= 70) {
        console.log("Está seco");
    } else {
        console.log("Está muito seco");
    }
} else { 
    console.log("Informe a umidade dentro da faixa 0 e 100");
}
console.log("Fim do programa");