import express from "express";
const rota = express.Router();

//ROTAS CLIENTES
rota.get("/clientes", (req, res)=>{

      const clientes = [
        {nome:"Pamela Candido", cpf: "999.999.999-99"},
        {nome:"Pamela Santos", cpf: "999.999.999-99"},
        {nome:"Maria Eduarda", cpf: "999.999.999-99"},
        {nome:"Andriele Pereira", cpf: "999.999.999-99"},
      ]
        res.render("clientes",{
            clientes: clientes,
        })
})

export default rota;