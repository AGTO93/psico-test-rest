const GenderService = require('../../services/business/gender.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Gender']
        #swagger.description = 'Endpoint to create new gender' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const genderData = req.body;
        const newGender = await GenderService.createGender(genderData);
        res.json(newGender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Gender']
        #swagger.description = 'Endpoint to update gender' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const genderData = req.body;
        const updatedGender = await GenderService.updateGender(id, genderData);
        res.json(updatedGender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Gender']
        #swagger.description = 'Endpoint to list genders' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const gender = await GenderService.findAllGender();
        res.json(gender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Gender']
        #swagger.description = 'Endpoint to find a specific gender' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const gender = await GenderService.findGenderById(id);
        res.json(gender);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};