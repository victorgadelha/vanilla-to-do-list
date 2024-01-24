const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = express();

server.get('/', (req, res) => {
    res.status(200).send('Olá, mundo!');
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
