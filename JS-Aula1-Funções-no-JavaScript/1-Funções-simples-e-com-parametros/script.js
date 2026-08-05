//FUNÇÃO SIMPLES
function ShowMessage() {
    const message = "<h2>Olá, seja bem vindo!</h2>";
    document.writeln(message);
}

ShowMessage();

//FUNÇÃO COM PARÂMETROS / ARGUMENTO
const user = "Osvaldo";

function userMessage(username) {
    document.write(`<h3>O que deseja fazer hoje, ${username}?</h3>`);
}

userMessage(user);

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 5;

function soma(n1, n2) {
    let resultado = n1 + n2;
    document.write(`A soma de ${n1} + ${n2} é igual a ${resultado}`);
}

soma(n1, n2);