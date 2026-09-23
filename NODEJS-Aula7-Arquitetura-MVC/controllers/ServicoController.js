import express from "express";
const rota = express.Router();

//ROTAS SERVIÇOS
rota.get("/servicos", (req, res)=>{
    res.render('servicos');
})

export default rota;