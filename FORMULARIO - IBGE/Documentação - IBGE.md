# Documentação da API de Usuários

URL base: `http://localhost:5000`

## Modelo do usuário

| Campo | Tipo | Descrição |
|---|---|---|
| id | number | Gerado pelo servidor |
| nome | string | Nome do usuário |
| email | string | Email do usuário |
| senha | string | Senha do usuário |
| cpf | string | CPF do usuário |
| idade | number | Idade do usuário, em anos |
| temGeladeira | boolean | Se o usuário possui geladeira em casa |
| nomesFavoritos | object | Nomes favoritos do usuário |
| nomesFavoritos.nome1 | string | Primeiro nome favorito |
| nomesFavoritos.nome2 | string | Segundo nome favorito |

## Endpoints

### GET /api/usuarios
Retorna a lista de todos os usuários.
- 200: array de usuários.

### GET /api/usuarios/:id
Retorna um usuário pelo `id`.
- 200: objeto do usuário.
- 404: `{ "mensagem": "Usuário não encontrado." }`

### POST /api/usuarios
Cria um usuário.

Corpo da requisição (JSON):

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "senha": "minhaSenha123",
  "cpf": "123.456.789-09",
  "idade": 28,
  "temGeladeira": true,
  "nomesFavoritos": {
    "nome1": "Ana",
    "nome2": "Pedro"
  }
}
```

- 201: `{ "mensagem": "Usuário criado com sucesso!", "usuario": { ... } }`

### PATCH /api/usuarios/:id
Atualiza os campos enviados de um usuário. O `id` não pode ser alterado.
- 200: `{ "mensagem": "Usuário atualizado com sucesso!", "usuario": { ... } }`
- 404: `{ "mensagem": "Usuário não encontrado." }`

### DELETE /api/usuarios/:id
Remove um usuário.
- 200: `{ "mensagem": "Usuário deletado com sucesso!", "usuario": { ... } }`
- 404: `{ "mensagem": "Usuário não encontrado." }`
