const VersionService = require('../../services/tests/version.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Version']
        #swagger.description = 'Endpoint to create new test version' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const VersionData = req.body;
        const newVersion = await VersionService.createVersion(VersionData);
        res.json(newVersion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Version']
        #swagger.description = 'Endpoint to update test version' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const versionData = req.body;
        const updatedVersion = await VersionService.updateVersion(id, versionData);
        res.json(updatedVersion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Version']
        #swagger.description = 'Endpoint to list tests versions' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const version = await VersionService.findAllVersions();
        res.json(version);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Version']
        #swagger.description = 'Endpoint to find a specific test version' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const version = await VersionService.findVersionById(id);
        res.json(version);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findFullById = async (req, res) => {
    /* 	#swagger.tags = ['Version']
        #swagger.description = 'Endpoint to find full details of a specific test version' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const version = await VersionService.findVersionFullById(id);
        res.json(version);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};