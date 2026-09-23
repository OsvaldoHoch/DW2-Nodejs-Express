import express from "express";
import Produto from "../models/Produto.js"
const router = express.Router();

router.get("/produtos", function (req, res) {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos: produtos
        });    
    });
});

Produto.sync({force: false});
export default router;