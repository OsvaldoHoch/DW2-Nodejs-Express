
//FUNÇÃO ANÔNIMA 
const mult = function(x) {
    return x * 2;
};
const x = 15;
document.write(`<p>O resultado da multiplicação é ${mult(x)}</p>`);


//FUNÇÃO COM SETA - COM UM ÚNICO PARÂMETRO - ARROW FUNCTION
const triplo = y => {
    return y * 3;
};
const y = 100;
document.write(`<p>O triplo de ${y} é ${triplo(y)}</p>`);



//FUNÇÃO SETA COM MAIS DE UM PARÂMETRO - ARROW FUNCTION
const calculadora = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`); //eval no Javascript é uma função nativa que realiza cálculos matemáticos a partir de dois núumeros e um operador.
};

const num1 = 88;
const operador = '-';
const num2 = 8;

document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`);


//FUNÇÃO IMEDIATA (IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION)
const imediata = (function() {
    document.write("<p>Estou sendo executada imediatamente!</p>");
})();

//FUNÇÃO IMEDIATA COM PARÂMETROS
const loadUser = (function (user) {
    document.write(`<p>Carregando as informaç~pes do uusuário: <strong>${user}</strong></p>...`);
    //Mostrando as informações após 3 segundos
    setTimeout(() => {
        document.write(`
            Nome: Osvaldo Fervido
            Idade: 18 anos
            Cidade: Cananéia
            Hobby: Alguns
            `);
    }, 3000); 

})("Osvaldo");
