const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(204).json(createdTask);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.deleteTask(id);
    return res.send('oi');
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const updatedTask = await tasksModel.updateTask(id, req.body);
    return res.status(204).json(updatedTask);
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};
