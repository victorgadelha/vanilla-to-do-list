const express = require('express');
const router = express.Router();

const TasksController = require('../src/controllers/TaskController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

router.get('/tasks', TasksController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, TasksController.createTask);
router.delete('/tasks/:id', TasksController.deleteTask);
router.put('/tasks/:id', TasksController.updateTask);

module.exports = router;
