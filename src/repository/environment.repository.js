const pool = require('../db')

async function getAllEnvironmentDB() {
    const client = await pool.connect();
    const queryText = 'SELECT * FROM environment';
    const arrOfAll = (await client.query(queryText)).rows;

    return arrOfAll
}

async function getByIDDB(id) {
    const client = await pool.connect();
    const sql = 'select *from environment where id=$1';
    const res = (await client.query(sql, [id])).rows;

    return res
}

async function createEnvironmentDB(label, category, priority) {
    const client = await pool.connect();
    const sql = 'insert into environment (label, category, priority) values ($1,$2,$3) returning*';
    const res = (await client.query(sql, [label, category, priority])).rows;
    return res
}


async function updateEnvDB(id, label, category, priority) {
    const client = await pool.connect();
    const sql = 'update environment set label = $1,category = $2,priority = $3 where id = $4 returning*';
    const res = (await client.query(sql, [label, category, priority, id])).rows;
    return res
}

async function deleteEnvIDDb(id) {
    const client = await pool.connect();
    const sql = 'delete from environment where id = $1 returning*';
    const res = (await client.query(sql, [id])).rows;
    return res
}

async function pathEnvDB(id, clientData) {
    const client = await pool.connect();
    const sql = 'select *from environment where id = $1';
    const res = (await client.query(sql, [id])).rows;

    const newObj = { ...res[0], ...clientData }
    const sqlUp = 'update environment set  label = $1,category = $2,priority = $3 where id = $4 returning*'
    const resUp = (await client.query(sqlUp, [newObj.label, newObj.category, newObj.priority, id])).rows;

    return resUp
}
module.exports = { getAllEnvironmentDB, getByIDDB, createEnvironmentDB, updateEnvDB, deleteEnvIDDb, pathEnvDB }