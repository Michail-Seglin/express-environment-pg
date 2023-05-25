const express = require('express');
const { getAllEnvironment, createEnvironment, getByID, updateEnv, deleteEnvID, pathEnv } = require('../service/environment.service');
const { isValidEnvId, isValidEnvBody } = require('../helper/validation')
const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data)
})

route.get('/:id', isValidEnvId, isValidEnvBody, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getByID(id);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er)
    }
})

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createEnvironment(label, category, priority)
        res.status(200).send(data);
    } catch (er) {
        res.status(404).send(er)
    }
})

route.put('/:id', isValidEnvId, isValidEnvBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await updateEnv(id, label, category, priority);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er)
    }
})

route.delete('/:id', isValidEnvId, isValidEnvBody, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteEnvID(id);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})

route.patch('/:id', isValidEnvId, isValidEnvBody, async (req, res) => {
    try {
        const { id } = req.params;
        const clientdata = req.body;
        const data = await pathEnv(id, clientdata);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})

module.exports = route;