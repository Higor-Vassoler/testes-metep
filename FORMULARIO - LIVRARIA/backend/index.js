import express from "express";
import cors from "cors";
import { buscarLivros, buscarLivro, criarLivro, deletarLivro, atualizarLivro } from "./CRUD.js";

const app = express();
app.use(cors());
app.use(express.json());

// rota para saber se o backend foi iniciado.
app.get("/", (req, res) => {
    res.send("Olá do Backend!");
});

// END-POINTS do CRUD de livros.
app.get("/api/livros", buscarLivros); // busca todos os livros do banco de dados.

app.get("/api/livros/:id", buscarLivro); // busca um determinado livro do banco de dados.

app.post("/api/livros", criarLivro); // cria um livro no banco de dados.

app.delete("/api/livros/:id", deletarLivro); // deleta um determinado livro do banco de dados.

app.patch("/api/livros/:id", atualizarLivro); // atualiza os dados de um determinado livro do banco de dados.

app.listen(5000, () => {
    console.log("Backend na porta: 5000");
});
