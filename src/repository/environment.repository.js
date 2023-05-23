const pool = require('../db')

async function getAllEnvironmentDB() {
    const client = await pool.connect();
    const queryText = 'SELECT * FROM environment';
    const arrOfAll = (await client.query(queryText)).rows;

    return arrOfAll
}

async function getSkillByIdDB(id) {
    const client = await pool.connect();
    const queryText = `SELECT * FROM environment where id = $1`;
    const arrOfAll = (await client.query(queryText, [id])).rows;
    return arrOfAll
}

module.exports = { getAllEnvironmentDB, getSkillByIdDB }