import express from "express";
import Produto from "../models/Produto.js"
const router = express.Router();

router.get("/produtos", function (req, res) {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        });    
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar clientes. Erro: ${error}`);
    });
});

router.post("/produtos/cadastrar", (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    Produto.create({
        nome: nome,
        preco: preco,
        categoria: categoria
    }).then(() => {
        res.redirect("/produtos");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o produto. Erro ${error}`);
    });
})

Produto.sync({force: false});
export default router;