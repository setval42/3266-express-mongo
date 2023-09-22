import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/livro.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão: ", erro)
});

conexao.once("open", ()=> {
    console.log("Conexão com o Banco de dados feita com sucesso!")
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS");
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    if (index === -1){
        res.status(404).send("Livro não encontrado!")
    } else {
        res.status(200).json(livros[index]);
    }
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);

    res.status(200).send("Livro removido com sucesso");
});

export default app;

