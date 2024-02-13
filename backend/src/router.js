const express = require('express');
const router = express.Router();

const TasksController = require('../src/controllers/TaskController');

router.get('/tasks', TasksController.getAll);

module.exports = router;
