// index.js: Arquivo principal do back

// Importando o Express.js para o projeto
const express = require("express"); // Forma clássica (CommonJS Modules)
const app = express(); // Criando uma instância do Express

//Configurando o EJS
app.set('view engine', 'ejs');

// Aqui irão as rotas do site
//FOTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/homepage", (req, res) => { // Por que "req" e "res"? req = Requisição do cliente ----- res = Resposta do servidor
    res.render('index');
});


app.get("/produtos", (req, res) => {
  // Lista de produtos (dados mockados)
  //Futuramente os dados virão do banco de dados
  // Array de objetos
  const produtos = [
    {nome: "Computador", marca: "Lenovo", preco: 3500},
    {nome: "Celular", marca: "Samsung", preco: 3500},
    {nome: "Notebook", marca: "Dell", preco: 3500},
    {nome: "Tablet", marca: "Asus", preco: 3500},

  ];
  // Enviando a lista de produtos para a pagina
  res.render("produtos",{
  // Enviando a lista de produtos para a pagina
  produtos : produtos, 
  } );
});


app.get("/servicos", (req, res) => {
  res.render("servicos");
});


app.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Lucas Morato", cpf:"999.999.999.999"},
    {nome: "Osvaldo Hoch", cpf:"888.888.888.888"},
    {nome: "Pamela Castro", cpf:"777.777.777.777"},
    {nome: "Allison Lopes", cpf:"666.666.666.6666"},
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});


app.get("/perfil", (req, res) => {
    res.render('perfil');
});

// Método do Express para iniciar o servidor Back-end
// app.listen()

// Iniciando o servidor na porta 8080
const port = 8080;
;
app.listen(port, (error) => {
    // Tratamento de erros durante inicialização
    if (error) {
        console.log(`Ocorreu um erro ao inicializar o servidor. Erro: ${error}`);
    } else {
        console.log(`Servidor inicializado com sucesso em: http://localhost:${port}`);
    }
});
