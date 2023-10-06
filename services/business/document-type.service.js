const DocumentType = require('../../models/business/document-type.model');

exports.createDocumentType = async (data) => {
    try {
        return await DocumentType.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateDocumentType = async (id, data) => {
    try {
        const documentType = await DocumentType.findByPk(id);
        if (!documentType) {
            throw new Error('Document Type not found');
        }

        await documentType.update(data);
        return documentType;
    } catch (error) {
        throw error;
    }
};

exports.findAllDocumentType = async () => {
    try { 
        return await DocumentType.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findDocumentTypeById = async (id) => {
    try {
        const documentType = await DocumentType.findByPk(id);
        if (!documentType) {
            throw new Error('Document Type not found');
        }
        return documentType;
    } catch (error) {
        throw error;
    }
}

