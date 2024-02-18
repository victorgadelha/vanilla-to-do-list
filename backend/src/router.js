const express = require('express');
const router = express.Router();

const TasksController = require('../src/controllers/TaskController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

router.get('/tasks', TasksController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, TasksController.createTask);

module.exports = router;
