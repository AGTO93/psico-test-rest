const DocumentTypeService = require('../../services/business/document-type.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Document Type']
        #swagger.description = 'Endpoint to create new document type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const docTypeData = req.body;
        const newDocType = await DocumentTypeService.createDocumentType(docTypeData);
        res.json(newDocType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Document Type']
        #swagger.description = 'Endpoint to update document type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const docTypeData = req.body;
        const updatedDocType = await DocumentTypeService.updateDocumentType(id, docTypeData);
        res.json(updatedDocType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Document Type']
        #swagger.description = 'Endpoint to list document type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const docType = await DocumentTypeService.findAllDocumentType();
        res.json(docType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Document Type']
        #swagger.description = 'Endpoint to find a specific document type' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const docType = await DocumentTypeService.findDocumentTypeById(id);
        res.json(docType);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};