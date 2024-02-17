const express = require('express');
const router = express.Router();

const TasksController = require('../src/controllers/TaskController');

router.get('/tasks', TasksController.getAll);
router.post('/tasks', TasksController.createTask);

module.exports = router;
