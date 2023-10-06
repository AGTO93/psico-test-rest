const Gender = require('../../models/business/gender.model');

exports.createGender = async (data) => {
    try {
        return await Gender.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateGender = async (id, data) => {
    try {
        const gender = await Gender.findByPk(id);
        if (!gender) {
            throw new Error('Gender not found');
        }

        await gender.update(data);
        return gender;
    } catch (error) {
        throw error;
    }
};

exports.findAllGender = async () => {
    try { 
        return await Gender.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findGenderById = async (id) => {
    try {
        const country = await Gender.findByPk(id);
        if (!country) {
            throw new Error('Gender not found');
        }
        return country;
    } catch (error) {
        throw error;
    }
}

