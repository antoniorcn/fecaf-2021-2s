// export function adicionar(n1, n2) {
//     let r = n1 + n2;
//     return r;
// }

// export function resto(n1, n2) {
//     return n1 % n2;
// }

// export function multiplicar(n1, n2) {
//     return n1 * n2;
// }

// export function calcular(n1, n2, operacao) {
//     return operacao(n1, n2);
// }


// export function calcularAreaRetangulo(base, altura) {
//     let area = base * altura;
//     return area;
// }

// export let calcularAreaRetangulo2 = (base, altura) => {
//     let area = base * altura;
//     return area;
// }


module.exports = { 
    adicionar: (n1, n2) => {
        let r = n1 + n2;
        return r;
    },

    resto: (n1, n2) => {
        return n1 % n2;
    },

    multiplicar: (n1, n2) => {
        return n1 * n2;
    },

    calcular: (n1, n2, operacao) => {
        return operacao(n1, n2);
    },


    calcularAreaRetangulo: (base, altura) => {
        let area = base * altura;
        return area;
    },

    calcularAreaRetangulo2: (base, altura) => {
        let area = base * altura;
        return area;
    }
};

