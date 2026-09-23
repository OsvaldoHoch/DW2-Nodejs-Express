//index.js - Arquivo principal do back-end

//Importando o express para o projeto
//const express = require("express");//Forma Classica(Common JS Modules)

import express from "express"; // Forma de importar usando o ES6
const app = express(); //Criando uma instância do express

import ProdutoController from "./controllers/ProdutoController.js";
import ClienteController from "./controllers/ClienteController.js";
import ServicoController from "./controllers/ServicoController.js";
import UsuarioController from "./controllers/UsuarioController.js";

//Configurando o ejs
app.set('view engine', 'ejs'); //ejs renderiza as páginas do site

// Configurando a pasta public para arquivos estáticos
app.use(express.static('public'));

app.use("/", ProdutoController);
app.use("/", ClienteController);
app.use("/", ServicoController);
app.use("/", UsuarioController);    

//AQUI IRÃO AS ROTAS DO SITE
//ROTA PRINCIPAL
//.get() -> Cria uma rota na aplicação
app.get("/", (req,res) => {
    res.render('index');

});

//Metodo do express para iniciar o servidor
//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
    //Tratando erros de inicialização
    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro ${error}`);
    }
    //Em caso de sucesso
    else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});