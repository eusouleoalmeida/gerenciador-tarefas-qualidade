const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.connect(err => {
  if (err) {
    console.error('Erro ao conectar no PostgreSQL', err.stack);
  } else {
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
  }
});

// Rota principal
app.get('/', (req, res) => {
  console.log('📡 Acessou rota principal "/"');
  res.send('🚀 Bem-vindo à API do Gerenciador de Tarefas! Use /api/tasks ou /health para testar.');
});

// Health check
app.get('/health', (req, res) => {
  console.log('📶 Verificação de saúde /health');
  res.send('API está funcionando corretamente 🚀');
});

// GET tarefas
app.get('/api/tasks', async (req, res) => {
  try {
    console.log('📥 [GET] Listando tarefas');
    const result = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('❌ Erro ao buscar tarefas:', error.message);
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});

// POST tarefa
app.post('/api/tasks', async (req, res) => {
  const { text } = req.body;
  console.log('📤 [POST] Tentando criar nova tarefa:', text);
  if (!text) {
    console.warn('⚠️ Texto da tarefa ausente');
    return res.status(400).json({ error: 'Texto da tarefa é obrigatório' });
  }

  try {
    const result = await pool.query('INSERT INTO tasks (text) VALUES ($1) RETURNING *', [text]);
    console.log('✅ Tarefa criada:', result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('❌ Erro ao criar tarefa:', error.message);
    res.status(400).json({ error: 'Erro ao criar tarefa. Verifique o tamanho do campo.' });
  }
});

// DELETE tarefa
app.delete('/api/tasks/:id', async (req, res) => {
  const id = req.params.id;
  console.log('🗑️ [DELETE] Solicitado para tarefa ID:', id);

  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      console.warn('⚠️ Tarefa não encontrada para exclusão');
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    console.log('✅ Tarefa removida com sucesso');
    res.status(204).send();
  } catch (error) {
    console.error('❌ Erro ao excluir tarefa:', error.message);
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});