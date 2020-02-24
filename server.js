const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', (req, res) =>{
    res.send('<h1>Node Auth 1 Project</h1>')
})

module.exports = server;
