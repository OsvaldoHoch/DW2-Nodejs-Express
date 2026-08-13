
// 1 - FUNÇÃO SIMPLES DE DADOS PESSOAIS
function dados(){
    document.write(`
        Nome: Osvaldo <br>
        Idade: 19 <br>
        Cidade: Cananéia <br>
        `);
};
dados();


// 2 - FUNÇÃO COM PARÂMETROS
function division(num1, num2){
    const div = num1/num2;
    document.write(`<p>O resultado da divisão entre ${num1} por ${num2} é igual a ${div}</p>`);
};
division(10,2);


// 3 - FUNÇÃO COM RETORNO
function multi(num1, num2, num3){
    const resultado = num1*num2*num3;
    return resultado;
};
const number1 = 2;
const number2 = 2;
const number3 = 2;

console.log(`O resultado da multiplicação entre ${number1}*${number2}*${number3} é igual a ${multi(number1,number2,number3)}`);


// 4 - FUNÇÃO COM MAIS DE UM RETORNO
function maiorIdade(idade) {
    if(idade >= 18){
        return "maior de idade";
    } else {
        return "menor de idade";
    };
}

const idades = 19;

console.log(`Tendo ${idades}, você é ${maiorIdade(idades)}`);


// 5 - FUNÇÃO ANÔNIMA
const media = function(nota1, nota2) {
    const media = (nota1 + nota2)/2;

    if(media >= 5){
        return `você foi Aprovado com ${media}`;
    } else {
        return `você reprovou com ${media}`;
    };
};

console.log(media(1,20));


// 6 - FUNÇÃO ARROW
const triplo = (num1) => {
    const multi = num1*3;
    return console.log(`O triplo de ${num1} é ${multi}`);
};

triplo(3);


// 7 - ARROW COM MAIS DE UM PARÂMETRO 
const soma = (num1,num2,num3,num4) => {
    const soma4 = num1+num2+num3+num4;
    return console.log(`A soma dos 4 números é ${soma4}`);
};

soma(1,2,3,4);


// 8 - IIFE
const saudacao = (function(nome){
    document.write(`<p>Bem vindo, ${nome}!</p>`);
})("Diego");