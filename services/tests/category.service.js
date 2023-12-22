const Category = require('../../models/tests/category.model');

exports.createCategory = async (data) => {
    try {
        return await Category.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateCategory = async (id, data) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error('Category not found');
        }

        await category.update(data);
        return category;
    } catch (error) {
        throw error;
    }
};

exports.findAllCategories = async () => {
    try { 
        return await Category.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findCategoryById = async (id) => {
    try {
        const category = await Category.findByPk(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    } catch (error) {
        throw error;
    }
}

