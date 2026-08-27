// Arrays no JavaScript

let produtos = ["Computador", "Notebook", "Celular", "Tablet"];
let aluno = "Gregs";

document.write(`<p>O tipo de variável recebe um vetor no JavaScript é: ${typeof(produtos)}</p>`);
document.write(`<p>O tipo de variável aluno é: ${typeof(aluno)}</p>`);

document.write("Exibindo os itens no vetor pelo índice: <br>");

document.write(`<p>${produtos[0]}</p>`);
document.write(`<p>${produtos[1]}</p>`);
document.write(`<p>${produtos[2]}</p>`);
document.write(`<p>${produtos[3]}</p>`);

document.write("<br> Exibindo os itens do vetor atravéz do <strong>forEach: </strong>");

produtos.forEach(produtos => {
    //Para cada "produto" da lista "produtos", faça:
    document.write(`<p>${produtos}</p>`);
});

document.write("<br> Exibindo os itens do vetor com os índices: <br>");

produtos.forEach((produtos, indice) => {
    document.write(`<p>${indice + 1} - ${produtos}</p>  `);
});