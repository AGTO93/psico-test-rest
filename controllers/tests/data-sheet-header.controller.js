const DataSheetHeader = require('../../services/tests/data-sheet-header.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Header']
        #swagger.description = 'Endpoint to create new data sheet header' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const dataSheetHeaderData = req.body;
        const newDataSheetHeader = await DataSheetHeader.createDataSheetHeader(dataSheetHeaderData);
        res.json(newDataSheetHeader);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Header']
        #swagger.description = 'Endpoint to update data sheet header' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const DataSheetHeaderData = req.body;
        const updatedDataSheetHeader = await DataSheetHeader.updateDataSheetHeader(id, DataSheetHeaderData);
        res.json(updatedDataSheetHeader);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Header']
        #swagger.description = 'Endpoint to list data sheet header' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const dataSheetHeader = await DataSheetHeader.findAllDataSheetHeaders();
        res.json(dataSheetHeader);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Data Sheet Header']
        #swagger.description = 'Endpoint to find a specific data sheet header' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const dataSheetHeader = await DataSheetHeader.findDataSheetHeaderById(id);
        res.json(dataSheetHeader);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};