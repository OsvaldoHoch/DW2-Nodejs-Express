document.write("<h3>Manipulando datas com JavaScript</h3>");

//É necessário primeiro criar uma instância da classe 'DATE', que é nativa do JavaScript

const dataAtual = new Date();

dataAtual.getDate();

document.write(dataAtual);

//Pegando o dia
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}</p>`);

//Pegando mês atual
const mes = dataAtual.getMonth()+1;
document.write(`<p>Estamos no mês de ${mes}</p>`);

//Pegando ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano de ${ano}</p>`);

//Exibindo data completa
document.write(`<p>Hoje é ${dia}/${mes}/${ano}</p>`);

//Adicionando dias, meses e anos
dataAtual.setDate(dataAtual.getDate() + 4); //Adicionando 4 dias
document.write(`<p>Daqui a quatro dias será ${dataAtual.getDate()}</p>`); // Exibindo

dataAtual.setMonth(dataAtual.getMonth() + 4); //Adicionando 3 meses
document.write(`<p>Daqui a 3 meses será ${dataAtual.getMonth()}</p>`); //Exibindo

dataAtual.setFullYear(dataAtual.getFullYear() + 2) //Adicionando 2 anos
document.write(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}</p>`);


// ================================================= MOEDAS =================================================
//Formatando moedas
document.write("<h3>Manipulando Moedas</h3>");

const futuroSalario = 40000.3000000001;
document.write(`<p>Este é meu futuro salário: ${futuroSalario}</p>`);

//Mostrando casas decimais
document.write(`<p>Arredondando casas Decimais: ${futuroSalario.toFixed(2)}</p>`);

//Ocultando casas decimais
document.write(`<p>Ocultando casas decimais: ${futuroSalario.toFixed(0)}</p>`);

//Trocando o identificador das casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".",",")}</p>`);

//Formatando para Real
document.write(`<p>Em Dólares: 
        ${futuroSalario.toLocaleString("en", {
            style: "currency",
            currency: "USD",
        })}
    </p>`);
document.write(`<p>Em Reais: 
        ${futuroSalario.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })}
    </p>`);


// ================================================= FORMATAÇÃO DE STRINGS =================================================
document.write("<h3>Formatação de Strings</h3>");
const nome = "Osvaldelas";

document.write(`<p>Nome com tudo em minúsculo: ${nome.toLowerCase()}</p>`); //Deixando em Minúsculo
document.write(`<p>Nome com tudo em maiúsculo: ${nome.toUpperCase()}</p>`); //Deixando em Maiúsculo

//Colocando iniciais em letras maiúsculas
const cidade = "sete barras";
const cidadeFormatada = cidade.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
//Exibindo
document.write(`<p>${cidadeFormatada}</p>`);

//Contando o número de caracteres
document.write(`Seu nome tem ${nome.replace(/\s/g, "").length}`);

