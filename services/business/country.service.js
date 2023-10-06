const Country = require('../../models/business/country.model');

exports.createCountry = async (data) => {
    try {
        return await Country.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateCountry = async (id, data) => {
    try {
        const country = await Country.findByPk(id);
        if (!country) {
            throw new Error('Country not found');
        }

        await country.update(data);
        return country;
    } catch (error) {
        throw error;
    }
};

exports.findAllCountries = async () => {
    try { 
        return await Country.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findCountryById = async (id) => {
    try {
        const country = await Country.findByPk(id);
        if (!country) {
            throw new Error('Country not found');
        }
        return country;
    } catch (error) {
        throw error;
    }
}

