# F1 Driver & Team API

## Descrição

Esta API simples, construída com Fastify, fornece informações sobre os pilotos e equipes da Fórmula 1. Ela inclui endpoints que retornam uma lista de equipes, uma lista de pilotos e detalhes sobre pilotos específicos.

## Tecnologias Utilizadas

- **Node.js**
- **Fastify** - Framework web rápido e eficiente para Node.js
- **CORS** - Habilita Cross-Origin Resource Sharing para permitir que a API seja acessada de qualquer origem
- **TypeScript** - Superset para incrementar o JavaScript

## Endpoints

### `GET /teams`

Retorna uma lista das equipes da Fórmula 1.

### `GET /drivers`
Retorna uma lista de pilotos da Fórmula 1.

### `GET /drivers/:id`
Retorna as informações detalhadas de um piloto com base no seu ID.

Parâmetros:

id (string): O ID do piloto.

## Como Executar

- 1. Clone o repositório 

```bash
git clone https://github.com/seu-usuario/f1-api.git
```
- 2. Instale as dependências 

```bash
npm install
```

- 3. Inicie o servidor

```bash
npm run start:dev
```

