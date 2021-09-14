// e) Todos os dados de um carro 
// (placa, chassi, modelo, ano, cor, nome do dono) que foi multado.

// let carro = "CCC0001c SDHEWTWREWFD2342342 FORD FIESTA 2003 CINZA ANTONIO";
let carro = {
    placa: "CCC0001",
    chassi: "SDHEWTWREWFD2342342",
    modelo: "FORD FIESTA",
    ano: 2003,
    cor: "CINZA",
    dono: "ANTONIO"
};

carro.placa = "DDD0002";

console.log("Placa do Carro ==> ", carro.placa);