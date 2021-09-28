const { exec } = require("child_process");
const readline = require("readline");
let executarNovamente = true;

const scan = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function perguntar() { 
    return new Promise(function(resolve, reject) {
        scan.question("Digite seu nome: ", 
                (nome) => {
                    console.log("Bem vindo, ", nome);
                    scan.question("Deseja rodar novamente (S/N): ", 
                    (rodar) => {
                        if (rodar === 'S') { 
                            perguntar();
                        } else {
                            scan.close(); 
                            return;
                        }
                    });
            });
        });
}

async function principal() {
    executarNovamente = await perguntar();
    console.log("Resposta do executarNovamente ==> ", executarNovamente);
}


principal();


