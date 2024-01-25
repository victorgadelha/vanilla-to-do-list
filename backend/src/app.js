const express = require('express');
const router = require('./router');

const app = express();

app.use(router);

app.get('/', (req, res) => {
    res.status(200).send('Olá, mundo!');
});

module.exports = app;
