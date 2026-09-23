import express from "express";
const rota = express.Router();

//ROTAS PERFIL
rota.get("/perfil", (req, res) =>{
    res.render('perfil');
})

export default rota;