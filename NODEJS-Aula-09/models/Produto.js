import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const Produto = connection.define('produtos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Produto.sync({force: false});
export default Produto;