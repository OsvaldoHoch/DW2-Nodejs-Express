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

// Rota de cadastro de clientes
router.post("/clientes/cadastrar", (req, res) => {
    // Capturnado os dados vindo do formulário e granvando nas variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;

    // Equivalente ao INSERT INTO...
    Cliente.create({
        // Nome da Coluna / Variável
        nome: nome,
        cpf: cpf,
        endereco: endereco,
    }).then(() => {
        res.redirect("/clientes")
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTE
//:id -> Cria um parâmetro na rota
router.get("/clientes/excluir/:id", (req, res)=> {
    //Criando uma variável p/ armazenar o parâmetro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para exluir o cliente
    Cliente.destroy({
        where:{
            id: id,
        },
    }).then(()=>{
        res.redirect("/clientes");
    }).catch(error=>{
        console.log(`Ocorreu um erro ao excluir clientes. ERRO: ${error}`);
    });
});

// ROTA DE EDIÇÃO DE CLIENTE
router.get("/clientes/editar/:id", (req, res) => {
    // Coletando parâmetro da URL
    const id = req.params.id;
    // Buscando o cliente no banco de dados pelo ID
    Cliente.findByPk(id).then(cliente => {
        res.render("clienteEditar", {
            cliente: cliente,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao buscar o cliente. Erro: ${error}`);
    });
});

// ROTA QUE ALTERA O CLIENTE NO BANCO DE DADOS
router.post("/clientes/alterar/", (req, res) => {
    // Colentando os dados do formulário
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    // Chamando o model e pedindo para alterar no banco de dados
    Cliente.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        { where : {id : id}}
    ).then(() => {
        res.redirect("/clientes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o cliente. Erro ${error}`);
    });
});

export default router;