// Model Cliente
// Um model é uma representação de uma entidade do sistema (tabela)

// Importando o arquivo conexão
import connection from "../config/sequelize-config.js";
//Importando a biblioteca Squelize
import Sequelize from "sequelize";

// Método define() define a estrutura de uma tabela no banco
const Cliente = connection.define('clientes', {
    // Atributos da tabela 'clientes'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

//O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
Cliente.sync({force: false});

export default Cliente;