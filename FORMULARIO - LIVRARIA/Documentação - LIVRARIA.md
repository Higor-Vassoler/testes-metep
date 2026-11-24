# Documentação da API de Livros

URL base: `http://localhost:5000`

## Modelo do livro

| Campo | Tipo | Descrição |
|---|---|---|
| id | number | Gerado pelo servidor |
| titulo | string | Título do livro |
| autor | string | Nome do autor |
| paginas | number | Quantidade de páginas |
| preco | number | Preço do livro, em reais |
| disponivel | boolean | Se o livro está disponível para empréstimo |
| categorias | object | Classificação do livro |
| categorias.principal | string | Categoria principal |
| categorias.ficcao | boolean | Se é uma obra de ficção |

## Endpoints

### GET /api/livros
Retorna a lista de todos os livros.
- 200: array de livros.

### GET /api/livros/:id
Retorna um livro pelo `id`.
- 200: objeto do livro.
- 404: `{ "mensagem": "Livro não encontrado." }`

### POST /api/livros
Cria um livro.

Corpo da requisição (JSON):

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "paginas": 256,
  "preco": 39.9,
  "disponivel": true,
  "categorias": {
    "principal": "Romance",
    "ficcao": true
  }
}
```

- 201: `{ "mensagem": "Livro criado com sucesso!", "livro": { ... } }`

### PATCH /api/livros/:id
Atualiza os campos enviados de um livro. O `id` não pode ser alterado.
- 200: `{ "mensagem": "Livro atualizado com sucesso!", "livro": { ... } }`
- 404: `{ "mensagem": "Livro não encontrado." }`

### DELETE /api/livros/:id
Remove um livro.
- 200: `{ "mensagem": "Livro deletado com sucesso!", "livro": { ... } }`
- 404: `{ "mensagem": "Livro não encontrado." }`
