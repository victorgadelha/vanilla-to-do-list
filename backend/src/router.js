const express = require('express');
const TaskController = require('./TaskController');

const router = express.Router();

router.get('/taks', TaskController.getAll);

module.exports = router;
