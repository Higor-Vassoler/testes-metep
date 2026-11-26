import { useState } from "react";

export default function SistemaIBGE() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [temGeladeira, setTemGeladeira] = useState(false);
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");

  async function puxarUsuariosCadastradps() {
    const usuarios = await fetch("http://localhost:5000/api/usuarios", {
      method: 'GET'
    });

    console.log("Lista de Usuários cadastrados:", usuarios);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const dados = {
      nome,
      email,
      senha,
      cpf,
      idade,
      temGeladeira,
      nomesFavoritos: {
        nome1,
        nome2
      }
    };

    try {
      const resposta = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.mensagem || 'Erro ao cadastrar usuário.');
      }

      console.log(resultado.mensagem);
      console.log(resultado.usuario);

    } catch (erro) {
      console.error('Erro ao enviar formulário:', erro.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Senha:</label>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <label>CPF:</label>
      <input
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <label>Idade:</label>
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />

      <label>Possui geladeira em casa?</label>
      <input
        type="checkbox"
        checked={temGeladeira}
        onChange={(e) => setTemGeladeira(e.target.checked)}
      />

      <fieldset>
        <legend>Nomes favoritos</legend>

        <label>Primeiro nome:</label>
        <input
          type="text"
          value={nome1}
          onChange={(e) => setNome1(e.target.value)}
        />

        <label>Segundo nome:</label>
        <input
          type="text"
          value={nome2}
          onChange={(e) => setNome2(e.target.value)}
        />
      </fieldset>

      <button type="submit">Enviar</button>
    </form>
  );
}
