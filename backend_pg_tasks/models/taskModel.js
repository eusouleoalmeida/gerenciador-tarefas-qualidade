const db = require('../db');

exports.getAllTasks = async () => {
  const result = await db.query('SELECT * FROM tasks ORDER BY id');
  return result.rows;
};

exports.createTask = async (text) => {
  const result = await db.query('INSERT INTO tasks (text) VALUES ($1) RETURNING *', [text]);
  return result.rows[0];
};

exports.deleteTask = async (id) => {
  await db.query('DELETE FROM tasks WHERE id = $1', [id]);
};