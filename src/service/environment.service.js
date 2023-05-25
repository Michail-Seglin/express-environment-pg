const { getAllEnvironmentDB,
    getByIDDB, createEnvironmentDB, updateEnvDB, deleteEnvIDDb, pathEnvDB } = require('../repository/environment.repository');

async function getAllEnvironment() {
    if (!data.length) throw new Error('DB is empty');
    const data = await getAllEnvironmentDB();
    return data
}

async function getByID(id) {
    if (!data.length) throw new Error('id not found');
    const data = await getByIDDB(id);
    return data
}

async function createEnvironment(label, category, priority) {
    if (!data.length) throw new Error('entry not created');
    const data = await createEnvironmentDB(label, category, priority);
    return data
}


async function updateEnv(id, label, category, priority) {
    const data = await updateEnvDB(id, label, category, priority);
    if (!data.length) throw new Error('id not found');
    return data
}

async function deleteEnvID(id) {
    const data = await deleteEnvIDDb(id);
    if (!data.length) throw new Error('id not found');
    return data
}

async function pathEnv(id, clientData) {
    const data = await pathEnvDB(id, clientData);
    if (!data.length) throw new Error('id not found');
    return data
}

module.exports = { getAllEnvironment, getByID, createEnvironment, updateEnv, deleteEnvID, pathEnv }