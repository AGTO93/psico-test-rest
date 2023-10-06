const CountryService = require('../../services/business/country.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Country']
        #swagger.description = 'Endpoint to create new country' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const countryData = req.body;
        const newCountry = await CountryService.createCountry(countryData);
        res.json(newCountry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Country']
        #swagger.description = 'Endpoint to update country' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const countryData = req.body;
        const updatedCountry = await CountryService.updateCountry(id, countryData);
        res.json(updatedCountry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Country']
        #swagger.description = 'Endpoint to list countries' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const country = await CountryService.findAllCountries();
        res.json(country);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Country']
        #swagger.description = 'Endpoint to find a specific country' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const country = await CountryService.findCountryById(id);
        res.json(country);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};