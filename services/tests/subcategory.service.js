const Subcategory = require('../../models/tests/subcategory.model');

exports.createSubcategory = async (data) => {
    try {
        return await Subcategory.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateSubcategory = async (id, data) => {
    try {
        const subcategory = await Subcategory.findByPk(id);
        if (!subcategory) {
            throw new Error('Subcategory not found');
        }

        await subcategory.update(data);
        return subcategory;
    } catch (error) {
        throw error;
    }
};

exports.findAllSubcategories = async () => {
    try { 
        return await Subcategory.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findSubcategoryById = async (id) => {
    try {
        const subcategory = await Subcategory.findByPk(id);
        if (!subcategory) {
            throw new Error('Subcategory not found');
        }
        return subcategory;
    } catch (error) {
        throw error;
    }
}

