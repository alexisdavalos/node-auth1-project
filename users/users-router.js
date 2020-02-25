const express = require('express');
const bcrypt = require('bcryptjs')
const Users = require('./users-model'); //imports Users Table Helper Functions
//Router
const router = express.Router();

//Login Post Route
router.post('/login', (req, res) =>{
    let { username, password } = req.body;
    Users.findBy({ username })
    .first()
    .then(user =>{
        if(user){
            res.status(200).json({message: `Welcome ${user.username}!`});
        }else{
            res.status(401).json({message: 'Invalid Credentials'})
        }
    })
})

//Register New User Route
router.post('/register', (req, res) =>{
    let user = req.body; //selects user from the request body
    const hashedPass = bcrypt.hashSync(user.password, 8); //hashes the user's password
    user.password = hashedPass; //replaces value of user.password with hashed password
    Users.insert(req.body)
    .then(newUser =>{
        res.status(200).json({id: newUser.id , username: newUser.username, message: 'Successfully Created New User'})
    }).catch(err =>{
        res.status(500).json({message: 'Failed To Create User'})
    })
})
//Get Users Route
router.get('/users', (req, res) =>{
    Users.find()
    .then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(500).json({message: 'Failed To Get Users'})
    })
})

module.exports = router;