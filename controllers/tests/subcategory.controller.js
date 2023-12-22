const Subcategory = require('../../services/tests/subcategory.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Sub category']
        #swagger.description = 'Endpoint to create new sub category' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const SubcategoryData = req.body;
        const newSubcategory = await Subcategory.createSubcategory(SubcategoryData);
        res.json(newSubcategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Sub category']
        #swagger.description = 'Endpoint to update sub category' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const subcategoryData = req.body;
        const updatedSubcategory = await Subcategory.updateSubcategory(id, subcategoryData);
        res.json(updatedSubcategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Sub category']
        #swagger.description = 'Endpoint to list sub categories' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const subcategory = await Subcategory.findAllSubcategories();
        res.json(subcategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Sub category']
        #swagger.description = 'Endpoint to find a specific sub category' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const subcategory = await Subcategory.findSubcategoryById(id);
        res.json(subcategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};