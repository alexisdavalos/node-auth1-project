const db = require('../data/dbConfig')

function find() {
    return db('users')
}

function findBy(filter){
    return db('users')
    .select('id', 'username', 'password')
    .where(filter)
    .first();
}

async function insert(user){
    const [id] = await db('users').insert(user)
    return db('users').where({id}).first()
}

module.exports ={
    find,
    findBy,
    insert
}