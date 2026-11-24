import { usuarios } from "./bancoDados.js";

export function buscarUsuarios(req, res) {
    return res.status(200).json(usuarios);
}

export function buscarUsuario(req, res) {
    const id = Number(req.params.id);
    const usuario = usuarios.find((usuario) => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    return res.status(200).json(usuario);
}

export function criarUsuario(req, res) {
    const dados = req.body;

    const novoUsuario = {
        id: Date.now(),
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
        cpf: dados.cpf,
        idade: dados.idade,
        temGeladeira: dados.temGeladeira,
        nomesFavoritos: {
            nome1: dados.nome1,
            nome2: dados.nome2
        }
    };

    usuarios.push(novoUsuario);

    return res.status(201).json({
        mensagem: "Usuário criado com sucesso!",
        usuario: novoUsuario
    });
}

export function deletarUsuario(req, res) {
    const id = Number(req.params.id);
    const index = usuarios.findIndex((usuario) => usuario.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    const [usuarioRemovido] = usuarios.splice(index, 1);

    return res.status(200).json({
        mensagem: "Usuário deletado com sucesso!",
        usuario: usuarioRemovido
    });
}


export function atualizarUsuario(req, res) {
    const id = Number(req.params.id);
    const usuario = usuarios.find((usuario) => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    for (let campo in req.body) {
        if (campo !== "id") {
            usuario[campo] = req.body[campo];
        }
    }

    return res.status(200).json({
        mensagem: "Usuário atualizado com sucesso!",
        usuario
    });
}
