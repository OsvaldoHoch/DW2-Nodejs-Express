//OBJETO
const produto = {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno"
    };

document.write(`<p>${produto}</p>`);

// Acessando os atributos do objeto
document.write(`<p>${produto.nome}, ${produto.marca}, ${produto.preco}, ${produto.descricao}</p>`);
const listaProdutos = [ 
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno"
    }, 
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Tablet"
    },
    {
        nome: "Celular",
        marca: "Apple",
        preco: 9000,
        descricao: "Iphone moderno top"
    }
];


//EXIBINDO AS INFORMAÇÕES COM forEach
listaProdutos.forEach(produto => 
    document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: ${produto.preco} <br>
        Descrição: ${produto.descricao}
        `)
);