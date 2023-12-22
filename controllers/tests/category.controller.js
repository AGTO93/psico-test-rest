const Category = require('../../services/tests/category.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Category']
        #swagger.description = 'Endpoint to create new category' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const categoryData = req.body;
        const newCategory = await Category.createCategory(categoryData);
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Category']
        #swagger.description = 'Endpoint to update category' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const categoryData = req.body;
        const updatedCategory = await Category.updateCategory(id, categoryData);
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Category']
        #swagger.description = 'Endpoint to list categiries' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const category = await Category.findAllCategories();
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Category']
        #swagger.description = 'Endpoint to find a specific category' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const category = await Category.findCategoryById(id);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};