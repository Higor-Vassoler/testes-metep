import express from "express";
import cors from "cors";
import { buscarUsuarios, buscarUsuario, criarUsuario, deletarUsuario, atualizarUsuario } from "./CRUD.js";

const app = express();
app.use(cors());
app.use(express.json());

// rota para saber se o backend foi iniciado.
app.get("/", (req, res) => {
    res.send("Olá do Backend!");
});

// END-POINTS do CRUD de usuarios.
app.get("/api/usuarios", buscarUsuarios); // busca todos os usuários do banco de dados.

app.get("/api/usuarios/:id", buscarUsuario); // busca um determinado usuário do banco de dados.

app.post("/api/usuarios", criarUsuario); // cria um usuário no banco de dados.

app.delete("/api/usuarios/:id", deletarUsuario); // deleta um determinado usuário do banco de dados.

app.patch("/api/usuarios/:id", atualizarUsuario); // atualiza os dados de um determinado usuário do banco de dados.

app.listen(5000, () => {
    console.log("Backend na porta: 5000");
});