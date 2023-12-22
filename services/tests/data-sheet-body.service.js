const DataSheetBody = require('../../models/tests/data-sheet-header.model');

exports.createDataSheetBody = async (data) => {
    try {
        return await DataSheetBody.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateDataSheetBody = async (id, data) => {
    try {
        const dataSheetBody = await DataSheetBody.findByPk(id);
        if (!dataSheetBody) {
            throw new Error('DataSheetBody not found');
        }

        await dataSheetBody.update(data);
        return dataSheetBody;
    } catch (error) {
        throw error;
    }
};

exports.findAllDataSheetBodies = async () => {
    try { 
        return await DataSheetBody.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findDataSheetBodyById = async (id) => {
    try {
        const dataSheetBody = await DataSheetBody.findByPk(id);
        if (!dataSheetBody) {
            throw new Error('DataSheetHeader not found');
        }
        return dataSheetBody;
    } catch (error) {
        throw error;
    }
}

