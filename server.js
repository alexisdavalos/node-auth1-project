const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

//Routers Import
const UsersRouter = require('./users/users-router.js')

server.use(helmet());
server.use(express.json());
server.use(cors());

//Routes
server.use('/api/auth', UsersRouter)

server.use('/', (req, res) =>{
    res.send('<h1>Node Auth 1 Project</h1>')
})

module.exports = server;
