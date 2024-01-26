const Task = require('../models/Task');
const getAll = async (req, res) => {
    const tasks = await Task.getAll();

    return res.status(200).json(tasks);
};

module.exports = {
    getAll,
};
