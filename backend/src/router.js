const express = require('express');
const TaskController = require('../src/controllers/TaskController');

const router = express.Router();

router.get('/taks', TaskController.getAll);

module.exports = router;
