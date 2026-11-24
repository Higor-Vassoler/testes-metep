import { livros } from "./bancoDados.js";

export function buscarLivros(req, res) {
    return res.status(200).json(livros);
}

export function buscarLivro(req, res) {
    const id = Number(req.params.id);
    const livro = livros.find((livro) => livro.id === id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    return res.status(200).json(livro);
}

export function criarLivro(req, res) {
    const dados = req.body;

    const novoLivro = {
        id: Date.now(),
        titulo: dados.titulo,
        autor: dados.autor,
        paginas: dados.paginas,
        preco: dados.preco,
        disponivel: dados.disponivel,
        categorias: {
            principal: dados.principal,
            ficcao: dados.ficcao
        }
    };

    livros.push(novoLivro);

    return res.status(201).json({
        mensagem: "Livro criado com sucesso!",
        livro: novoLivro
    });
}

export function deletarLivro(req, res) {
    const id = Number(req.params.id);
    const index = livros.findIndex((livro) => livro.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    const [livroRemovido] = livros.splice(index, 1);

    return res.status(200).json({
        mensagem: "Livro deletado com sucesso!",
        livro: livroRemovido
    });
}


export function atualizarLivro(req, res) {
    const id = Number(req.params.id);
    const livro = livros.find((livro) => livro.id === id);

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    for (let campo in req.body) {
        if (campo !== "id") {
            livro[campo] = req.body[campo];
        }
    }

    return res.status(200).json({
        mensagem: "Livro atualizado com sucesso!",
        livro
    });
}