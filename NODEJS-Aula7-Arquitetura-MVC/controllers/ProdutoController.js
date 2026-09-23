// Importando o framework Express
import express from "express";
const rota = express.Router(); // Método do Express para criar rotas

//ROTA DE PRODUTOS
rota.get("/produtos", (req, res) =>{
    //Lista de produtos (dados mockados)
    //Futuramente os dados virão do banco de dados
    //Array de objetos
    const produtos =[
        {nome: "Computador", marca: "Lenovo", preco: 3500},
        {nome: "Celular", marca: "Samsung", preco: 4000},
        {nome: "Notebook", marca: "Dell", preco: 5100},
        {nome: "Tablet", marca: "Asus", preco: 2400},
    ];

    res.render('produtos',{
    //Enviando a lista de produtos para a página
        produtos:produtos,
    });
});

//Exportando o módulo
export default rota;