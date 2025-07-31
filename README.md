# 📦 Gerenciador de Tarefas (Qualidade de Software)

Sistema simples de gerenciamento de tarefas com foco em demonstração de uma API RESTful usando Node.js, Express e PostgreSQL, com testes E2E automatizados usando Cypress e boas práticas de QA.

---

## 🧩 Tecnologias utilizadas

### Back-end
- **Node.js + Express**
- **PostgreSQL** (via `pg`)
- **.env** para variáveis sensíveis

### Front-end
- Interface leve em **HTML + Fetch API**
- Visualização simples para testes

### Testes Automatizados
- **Cypress** (Testes E2E)
- Testes **positivos** e **negativos**
- Execução via `npx cypress run` ou interface visual

---

## 🧱 Funcionalidades da API

| Método | Rota             | Descrição                    |
|--------|------------------|------------------------------|
| GET    | /api/tasks       | Lista todas as tarefas       |
| POST   | /api/tasks       | Cria uma nova tarefa         |
| DELETE | /api/tasks/:id   | Remove uma tarefa específica |

---

## 🚀 Como rodar o projeto

### Pré-requisitos:
- Node.js v18+ e NPM
- PostgreSQL instalado e rodando
- Conta no GitHub (caso deseje versionar)
- Cypress (`npx cypress open` instala automaticamente)

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gerenciador-tarefas-qualidade.git
cd gerenciador-tarefas-qualidade
```

### 2. Configure o banco de dados:

Crie o banco no PostgreSQL com:

```sql
CREATE DATABASE tarefas;
```

Crie a tabela:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL
);
```

### 3. Configure as variáveis de ambiente:

Crie o arquivo `.env` na pasta `backend_pg_tasks/`:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/tarefas
```

---

## 🔧 Executando o projeto

### Back-end (API):
```bash
cd backend_pg_tasks
npm install
npm start
```

### Interface HTML (opcional):
Abra `frontend_gerenciador_tarefas.html` no navegador.

---

## 🧪 Executando os testes automatizados

### Testes positivos e negativos com Cypress:

```bash
cd cypress_tasks_test
npm install
npx cypress open
```

Ou para execução em modo headless:

```bash
npx cypress run
```

Abra o teste `tasks.cy.js` e `tasks_error.cy.js` e veja os testes sendo executados.

---

## 🧪 O que os testes verificam?

- Criação de tarefa (`POST`)
- Listagem de tarefas (`GET`)
- Exclusão de tarefa (`DELETE`)

---

## 📁 Estrutura do projeto

```
📦 projeto
 ┣ 📂 backend_pg_tasks
 ┃ ┣ 📜 controllers/
 ┃ ┣ 📜 models/
 ┃ ┣ 📜 routes/
 ┃ ┣ 📜 db/
 ┃ ┣ 📜 server.js
 ┃ ┗ 📜 .env
 ┣ 📂 cypress_tasks_test
 ┃ ┣ 📂 cypress
 ┃ ┃ ┣ 📂 e2e
 ┃ ┃ ┃ ┣ 📜 tasks.cy.js
 ┃ ┃ ┃ ┗ 📜 tasks_error.cy.js
 ┃ ┃ ┣ 📂 integration
 ┃ ┣ 📜 cypress.json
 ┃ ┣ 📜 package.json
 ┗ 📜 frontend_gerenciador_tarefas.html
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como parte de um processo seletivo para a vaga de **Analista de Qualidade de Software Júnior**.

Demonstra:
- Boas práticas de testes automatizados
- Cobertura de cenários positivos e negativos
- Organização e clareza no código
- Estrutura de projeto real com API + testes

---

## 👨‍💻 Desenvolvedor

**Leanderson Silva de Almeida**  
📧 leanderson@lumgra.com.br  
🔗 [linkedin.com/in/eusouleoalmeida](https://linkedin.com/in/eusouleoalmeida)