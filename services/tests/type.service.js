const Type = require('../../models/tests/type.model');

exports.createType = async (data) => {
    try {
        return await Type.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateType = async (id, data) => {
    try {
        const type = await Type.findByPk(id);
        if (!type) {
            throw new Error('Type not found');
        }

        await type.update(data);
        return type;
    } catch (error) {
        throw error;
    }
};

exports.findAllTypes = async () => {
    try { 
        return await Type.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findTypeById = async (id) => {
    try {
        const type = await Type.findByPk(id);
        if (!type) {
            throw new Error('Type not found');
        }
        return type;
    } catch (error) {
        throw error;
    }
}

