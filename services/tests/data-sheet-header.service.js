const DataSheetHeader = require('../../models/tests/data-sheet-header.model');

exports.createDataSheetHeader = async (data) => {
    try {
        return await DataSheetHeader.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateDataSheetHeader = async (id, data) => {
    try {
        const dataSheetHeader = await DataSheetHeader.findByPk(id);
        if (!dataSheetHeader) {
            throw new Error('DataSheetHeader not found');
        }

        await dataSheetHeader.update(data);
        return dataSheetHeader;
    } catch (error) {
        throw error;
    }
};

exports.findAllDataSheetHeaders = async () => {
    try { 
        return await DataSheetHeader.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findDataSheetHeaderById = async (id) => {
    try {
        const dataSheetHeader = await DataSheetHeader.findByPk(id);
        if (!dataSheetHeader) {
            throw new Error('DataSheetHeader not found');
        }
        return dataSheetHeader;
    } catch (error) {
        throw error;
    }
}

