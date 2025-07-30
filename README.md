# 📦 Gerenciador de Tarefas – Backend + Testes Cypress

Projeto simples para demonstração de uma API RESTful usando Node.js, Express e PostgreSQL, com testes E2E automatizados usando Cypress.

---

## 🚀 Tecnologias Utilizadas

- Node.js + Express
- PostgreSQL
- Cypress (para testes automatizados)
- Docker (opcional)
- GitHub

---

## 🧱 Funcionalidades da API

| Método | Rota             | Descrição                    |
|--------|------------------|------------------------------|
| GET    | /api/tasks       | Lista todas as tarefas       |
| POST   | /api/tasks       | Cria uma nova tarefa         |
| DELETE | /api/tasks/:id   | Remove uma tarefa específica |

---

## 🛠️ Pré-requisitos

- Node.js v18+ (com `npm`)
- PostgreSQL instalado localmente
- Git

---

## 🐘 Configurando o PostgreSQL

1. Crie o banco:
```sql
CREATE DATABASE tarefas;
```

2. Crie a tabela:
```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL
);
```

3. Crie o arquivo `.env` na raiz do backend:

```
DATABASE_URL=postgres://seu_usuario:sua_senha@localhost:5432/tarefas
```

---

## ▶️ Executando o Backend

```bash
cd backend_pg_tasks
npm install
npm start
```

Servidor será iniciado em `http://localhost:5000`

---

## ✅ Rodando os Testes com Cypress

```bash
cd cypress_tasks_test
npm install
npx cypress open
```

Abra o teste `tasks.spec.js` e veja os testes sendo executados.

---

## 🧪 O que os testes verificam?

- Criação de tarefa (`POST`)
- Listagem de tarefas (`GET`)
- Exclusão de tarefa (`DELETE`)

---

## 📁 Estrutura dos diretórios

```
backend_pg_tasks/
├── controllers/
├── models/
├── routes/
├── db/
└── server.js

cypress_tasks_test/
├── cypress/
│   ├── integration/
│   └── support/
├── cypress.json
└── package.json
```

---

## 👨‍💻 Autor

Leanderson Silva de Almeida – Analista de Qualidade de Software – 2025