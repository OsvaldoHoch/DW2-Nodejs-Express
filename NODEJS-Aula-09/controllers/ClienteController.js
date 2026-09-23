import express from "express";
import Cliente from "../models/Cliente.js"
const router = express.Router();

router.get("/clientes", function (req, res) {
    // Selecionando todos clientes do banco de dados (PROMISSE)
    Cliente.findAll().then(clientes => {
        res.render("clientes", {
            clientes: clientes
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`);
    });
});

export default router;