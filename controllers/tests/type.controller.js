const TypeService = require('../../services/tests/type.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Type']
        #swagger.description = 'Endpoint to create new type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const TypeData = req.body;
        const newType = await TypeService.createType(TypeData);
        res.json(newType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Type']
        #swagger.description = 'Endpoint to update type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const typeData = req.body;
        const updatedType = await TypeService.updateType(id, typeData);
        res.json(updatedType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Type']
        #swagger.description = 'Endpoint to list types' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const type = await TypeService.findAllTypes();
        res.json(type);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Type']
        #swagger.description = 'Endpoint to find a specific type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const type = await TypeService.findTypeById(id);
        res.json(type);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};