const { Pool } = require('pg')

const pool = new Pool({
    password: 'Javascript23',
    database: 'skills',
    port: 5432,
    host: 'localhost',
    user: 'postgres'
})

module.exports = pool