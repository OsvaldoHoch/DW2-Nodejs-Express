import express from "express";
import Produto from "../models/Produto.js"
const router = express.Router();

// Rrota para renderizar tabela de produtos
router.get("/produtos", function (req, res) {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        });    
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar clientes. Erro: ${error}`);
    });
});

// Rota para cadastrar produtos
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
});

// Rota para excluir produtos
router.get("/produtos/excluir/:id", (req, res) => {
    const id = req.params.id;
    Produto.destroy({
        where:{
            id: id,
        },
    }).then(() => {
        res.redirect("/produtos");
    }).catch(error => {
        console.log(`Ocorreu um erro ao excluir o produto. Erro: ${error}`);
    });
});

// Rota para entrar na página de edição de produtos
router.get("/produtos/editar/:id", (req, res) => {
    const id = req.params.id;
    Produto.findByPk(id).then(produto => {
        res.render("produtoEditar", {
            produto: produto,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao editar produto. Erro: ${error}`);
    });
});

// Rota para alterar produtos da tabela
router.post("/produtos/alterar/", (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    Produto.update(
        {
            nome: nome,
            preco: preco,
            categoria: categoria,
        },
        {where : {id: id}},
    ).then(() => {
        res.redirect("/produtos");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar dados do produto. Erro: ${error}`);
    });
});

Produto.sync({force: false});
export default router;