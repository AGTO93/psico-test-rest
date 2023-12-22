const SuboptionService = require('../../services/tests/suboption.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Sub option']
        #swagger.description = 'Endpoint to create new sub option' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const SuboptionData = req.body;
        const newSuboption = await SuboptionService.createSuboption(SuboptionData);
        res.json(newSuboption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Sub option']
        #swagger.description = 'Endpoint to update sub option' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const suboptionData = req.body;
        const updatedSuboption = await SuboptionService.updateSuboption(id, suboptionData);
        res.json(updatedSuboption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Sub option']
        #swagger.description = 'Endpoint to list sub options' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const suboption = await SuboptionService.findAllSuboptions();
        res.json(suboption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Sub option']
        #swagger.description = 'Endpoint to find a specific sub option' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const suboption = await SuboptionService.findSuboptionById(id);
        res.json(suboption);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};