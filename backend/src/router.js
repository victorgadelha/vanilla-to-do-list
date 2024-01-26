const express = require('express');
const router = express.Router();
const TaskController = require('../src/controllers/TaskController');

router.get('/tasks', TaskController.getAll);

module.exports = router;
