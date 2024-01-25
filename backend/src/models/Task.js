const connection = require('../database/connection');

const getAll = () => {
    const tasks = connection.execute('SELECT * FROM tasks')
};

module.exports = {
    getAll,
};
