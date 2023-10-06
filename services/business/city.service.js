const City = require('../../models/business/city.model');

exports.createCity = async (data) => {
    try {
        return await City.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateCity = async (id, data) => {
    try {
        const city = await City.findByPk(id);
        if (!city) {
            throw new Error('City not found');
        }

        await city.update(data);
        return city;
    } catch (error) {
        throw error;
    }
};

exports.findAllCities = async () => {
    try { 
        return await City.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findCityById = async (id) => {
    try {
        const city = await City.findByPk(id);
        if (!city) {
            throw new Error('City not found');
        }
        return city;
    } catch (error) {
        throw error;
    }
}

