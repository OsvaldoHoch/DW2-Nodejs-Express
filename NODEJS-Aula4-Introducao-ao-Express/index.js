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
    res.render('produtos');
});
app.get("/servicos", (req, res) => {
    res.render('servicos');
});
app.get("/clientes", (req, res) => {
    res.render('clientes');
});
app.get("/perfil", (req, res) => {
    res.render('perfil');
});

// Método do Express para iniciar o servidor Back-end
// app.listen()

// Iniciando o servidor na porta 8080
const port = 8080
;
app.listen(port, (error) => {
    // Tratamento de erros durante inicialização
    if (error) {
        console.log(`Ocorreu um erro ao inicializar o servidor. Erro: ${error}`);
    } else {
        console.log(`Servidor inicializado com sucesso em: http://localhost:${port}`);
    }
});
