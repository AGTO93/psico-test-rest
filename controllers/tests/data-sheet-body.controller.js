const DataSheetBody = require('../../services/tests/data-sheet-body.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Body']
        #swagger.description = 'Endpoint to create new data sheet body' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const dataSheetBodyData = req.body;
        const newDataSheetHeader = await DataSheetBody.createDataSheetBody(dataSheetBodyData);
        res.json(newDataSheetHeader);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Body']
        #swagger.description = 'Endpoint to update data sheet body' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const dataSheetBodyData = req.body;
        const updatedDataSheetBody = await DataSheetBody.updateDataSheetBody(id, dataSheetBodyData);
        res.json(updatedDataSheetBody);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Body']
        #swagger.description = 'Endpoint to list data sheet body' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const dataSheetBody = await DataSheetBody.findAllDataSheetBodies();
        res.json(dataSheetBody);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Body']
        #swagger.description = 'Endpoint to find a specific data sheet body' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const dataSheetBody = await DataSheetBody.findDataSheetBodyById(id);
        res.json(dataSheetBody);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};