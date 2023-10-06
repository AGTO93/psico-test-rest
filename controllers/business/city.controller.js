const CityService = require('../../services/business/City.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['City']
        #swagger.description = 'Endpoint to create new city' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const cityData = req.body;
        const newCity = await CityService.createCity(cityData);
        res.json(newCity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['City']
        #swagger.description = 'Endpoint to update city' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const cityData = req.body;
        const updatedCity = await CityService.updateCity(id, cityData);
        res.json(updatedCity);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['City']
        #swagger.description = 'Endpoint to list cities' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const city = await CityService.findAllCountries();
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['City']
        #swagger.description = 'Endpoint to find a specific city' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const city = await CityService.findCityById(id);
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};