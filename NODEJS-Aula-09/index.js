// Importando o Express
import express from "express";
import connection from "./config/sequelize-config.js";

// Iniciando o Express ==========================================================================================================
const app = express()
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// REALIZNADO A CONEXÃO COM O BANCO DE DADOS =====================================================================================
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
  console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`);r
});

import ClienteController from "./controllers/ClienteController.js";
import PedidoController from "./controllers/PedidoController.js";
import ProdutoController from "./controllers/ProdutoController.js";

// Importando models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";

// CRIA BANCO DE DADOS
const DB_NAME = "loja";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
  console.log(`O banco de dados ${DB_NAME} está criado!`);
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar o banco de dados. ERRO: ${error}`);
})

// ROTA PRINCIPAL ================================================================================================================
app.get("/", function (req, res) {
    res.render("index");
});
// ROTA CLIENTES
app.use("/", ClienteController);
// ROTA PRODUTOS
app.use("/", ProdutoController);
// ROTA PEDIDOS
app.use("/", PedidoController);

// INICIA O SERVIDOR NA PORTA 8080 ================================================================================================
const port = 8080;
app.listen(port, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")

    } else {
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
});
