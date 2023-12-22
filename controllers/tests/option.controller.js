const OptionService = require('../../services/tests/option.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Option']
        #swagger.description = 'Endpoint to create new option' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const optionData = req.body;
        const newOption = await OptionService.createOption(optionData);
        res.json(newOption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Option']
        #swagger.description = 'Endpoint to update option' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const optionData = req.body;
        const updatedOption = await OptionService.updateOption(id, optionData);
        res.json(updatedOption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Option']
        #swagger.description = 'Endpoint to list options' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const option = await OptionService.findAllOptions();
        res.json(option);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Option']
        #swagger.description = 'Endpoint to find a specific option' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const question = await OptionService.findOptionById(id);
        res.json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};