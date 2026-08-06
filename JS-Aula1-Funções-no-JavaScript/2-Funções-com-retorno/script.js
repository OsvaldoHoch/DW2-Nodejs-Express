
const n1 = 10;
const n2 = 15;

// FUNÇÃO QUE GERA UM RESULTADO E EXPORTA
function multiplicar(n1, n2) {
    return n1 * n2;
}

document.write(`A multiplicação de ${n1} por ${n2} é igual a ${multiplicar(n1, n2)}`);

// FUNÇÃO COM MAIS DE UM RETORNO

const number = 4;

function parImpar(number) {
    if (number%2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}

document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong></p>`);
