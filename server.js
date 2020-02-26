const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const session = require('express-session');
const KnexStore = require('connect-session-knex')(session);

//Routers Import
//restricted middleware
const restricted = require('./auth/restricted-middleware');
const authRouter = require('./auth/auth-router.js');
const userRouter = require('./users/users-router');
const knex = require('./data/dbConfig');

//configure session
const sessionConfig = {
    name: 'monster', //banana word
    secret: 'keep it secret, keep it safe!',
    resave: false,
    saveUninitialized: true, //related to GDPR compliance
    cookie: {
        maxAge: 1000* 60 * 10, //60 minute cookie
        secure: false, //should be true in production
        httpOnly: true //true means JS can't touch the cookie
    },
    store: new KnexStore({
        knex,
        tablename: 'sessions',
        createtable: true,
        sidfieldname: 'sid',
        clearInterval: 1000 * 60 * 15
    })
}
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

//Routes
server.use('/api/auth', authRouter)
server.use('/api/users', restricted, userRouter)

server.use('/', (req, res) =>{
    res.send('<h1>Node Auth 1 Project</h1>')
})

module.exports = server;
