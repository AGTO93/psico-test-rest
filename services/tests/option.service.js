const Option = require('../../models/tests/option.model');

exports.createOption = async (data) => {
    try {
        return await Option.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateOption = async (id, data) => {
    try {
        const option = await Option.findByPk(id);
        if (!option) {
            throw new Error('Option not found');
        }

        await option.update(data);
        return option;
    } catch (error) {
        throw error;
    }
};

exports.findAllOptions = async () => {
    try { 
        return await Option.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findOptionById = async (id) => {
    try {
        const option = await Option.findByPk(id);
        if (!option) {
            throw new Error('Question not found');
        }
        return option;
    } catch (error) {
        throw error;
    }
}

