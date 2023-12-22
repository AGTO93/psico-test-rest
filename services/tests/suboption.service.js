const Suboption = require('../../models/tests/suboption.model');

exports.createSuboption = async (data) => {
    try {
        return await Suboption.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateSuboption = async (id, data) => {
    try {
        const suboption = await Suboption.findByPk(id);
        if (!suboption) {
            throw new Error('Suboption not found');
        }

        await suboption.update(data);
        return suboption;
    } catch (error) {
        throw error;
    }
};

exports.findAllSuboptions = async () => {
    try { 
        return await Suboption.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findSuboptionById = async (id) => {
    try {
        const suboption = await Suboption.findByPk(id);
        if (!suboption) {
            throw new Error('Suboption not found');
        }
        return suboption;
    } catch (error) {
        throw error;
    }
}

