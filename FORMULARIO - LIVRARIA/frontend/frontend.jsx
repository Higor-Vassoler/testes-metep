import { useState } from "react";

const URL_API = "http://localhost:5000/api/livros";

export default function SistemaLivraria() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoriaPrincipal, setCategoriaPrincipal] = useState("");
  const [ficcao, setFiccao] = useState(false);
  const [paginas, setPaginas] = useState("");
  const [preco, setPreco] = useState("");
  const [disponivel, setDisponivel] = useState(false);

  async function listarLivros() {
    const livros = await fetch(URL_API, {
      method: "GET"
    });

    console.log("Lista de Livros cadastrados:", livros);
  }

  async function cadastrarLivro(event) {
    event.preventDefault();

    const livroNovo = {
      titulo,
      autor,
      categorias: {
        principal: categoriaPrincipal,
        ficcao
      },
      paginas,
      preco: Number(preco),
      disponivel
    };

    try {
      const resposta = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(livroNovo)
      });

      const retorno = await resposta.json();

      if (!resposta.ok) {
        console.error("Erro ao cadastrar livro:", retorno.mensagem);
        return;
      }

      console.log(retorno.mensagem);
      console.log(retorno.livro);
    } catch (erro) {
      console.error("Erro de conexão com o servidor:", erro.message);
    }
  }

  return (
    <form onSubmit={cadastrarLivro}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="autor">Autor:</label>
        <input
          id="autor"
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>

      <fieldset>
        <legend>Categorias</legend>

        <div>
          <label htmlFor="categoriaPrincipal">Categoria principal:</label>
          <input
            id="categoriaPrincipal"
            type="text"
            value={categoriaPrincipal}
            onChange={(e) => setCategoriaPrincipal(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ficcao">É uma obra de ficção?</label>
          <input
            id="ficcao"
            type="checkbox"
            checked={ficcao}
            onChange={(e) => setFiccao(e.target.checked)}
          />
        </div>
      </fieldset>

      <div>
        <label htmlFor="paginas">Número de páginas:</label>
        <input
          id="paginas"
          type="number"
          value={paginas}
          onChange={(e) => setPaginas(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="preco">Preço (R$):</label>
        <input
          id="preco"
          type="number"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="disponivel">Disponível para empréstimo?</label>
        <input
          id="disponivel"
          type="checkbox"
          checked={disponivel}
          onChange={(e) => setDisponivel(e.target.checked)}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}