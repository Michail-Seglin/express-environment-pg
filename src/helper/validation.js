function isValidEnvId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('Your id not a number');
    if (id < 0) throw new Error('Your id negative');
    next()
}

function isValidEnvBody(req, res, next) {
    const { label, category, priority } = req.body;
    if (!label) throw new Error('label is empty')
    if (!category) throw new Error('category is empty')
    if (!priority) throw new Error('priority is empty')

    if (!isNaN(label)) throw new Error('label is not a letter');
    if (!isNaN(category)) throw new Error('category is not a letter');
    if (isNaN(priority)) throw new Error('priority is not a number');

    next();
}

module.exports = { isValidEnvId, isValidEnvBody }