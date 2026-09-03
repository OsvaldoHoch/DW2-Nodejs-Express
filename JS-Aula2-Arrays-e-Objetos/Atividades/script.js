// Lista de exercício 2 

const estoqueProdutos = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 4000,
        descricao: "Feito para estudos"
    },
    {
        nome: "Notebook",
        marca: "ASUS",
        preco: 5000,
        descricao: "Para jogos"
    },
    {
        nome: "Playstation 5",
        marca: "Sony",
        preco: 4500,
        descricao: "Videogame"
    }
];

estoqueProdutos.forEach(produtos =>
    document.write(`<p>
        Nome: ${produtos.nome} <br>
        Marca: ${produtos.marca} <br>
        Preço: ${produtos.preco} <br>
        Descrição: ${produtos.descricao}
        </p>`)
);

estoqueProdutos.push({
    nome: "Xbox 720",
    marca: "Microsoft",
    preco: 4400,
    descricao: "O mais poderoso do mercado."
});

document.write("<br>========= ATUALIZAÇÃO DE PRODUTOS ==========");

estoqueProdutos.forEach(produtos =>
    document.write(`<p>
        Nome: ${produtos.nome} <br>
        Marca: ${produtos.marca} <br>
        Preço: ${produtos.preco} <br>
        Descrição: ${produtos.descricao}
        </p>`)
);


estoqueProdutos.unshift({
    nome: "Nintendo Switch 3",
    marca: "Nintendo",
    preco: 7000,
    descricao: "O partátil"
});

document.write("<br>========= ATUALIZAÇÃO DE PRODUTOS ==========");

estoqueProdutos.forEach(produtos =>
    document.write(`<p>
        Nome: ${produtos.nome} <br>
        Marca: ${produtos.marca} <br>
        Preço: ${produtos.preco} <br>
        Descrição: ${produtos.descricao}
        </p>`)
);


document.write("<br>====== ATUALIZAÇÃO DA ORDENAÇÃO DE PRODUTOS =======");

estoqueOrdenado = estoqueProdutos.sort((a, b) => a.preco - b.preco);

estoqueOrdenado.forEach(produtos =>
    document.write(`<p>
        Nome: ${produtos.nome} <br>
        Marca: ${produtos.marca} <br>
        Preço: ${produtos.preco} <br>
        Descrição: ${produtos.descricao}
        </p>`)
);




