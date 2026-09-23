import express from "express";
import Pedido from "../models/Pedido.js"
const router = express.Router();

router.get("/pedidos", function (req, res) {
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos: pedidos
        });
    }).catch(error => {console.log(`Erro com dados da tabela pedidos. Erro: ${error}`)}); 
});

export default router;