const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
  const tasks = await Task.getAllTasks();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await Task.createTask(req.body.text);
  res.status(201).json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.deleteTask(req.params.id);
  res.sendStatus(204);
};