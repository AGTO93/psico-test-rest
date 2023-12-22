const CaseReport = require('../../services/tests/case-report.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Case Report']
        #swagger.description = 'Endpoint to create new case report' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const caseReportData = req.body;
        const newCaseReport = await CaseReport.createCaseReport(caseReportData);
        res.json(newCaseReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Case Report']
        #swagger.description = 'Endpoint to update case report' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const caseReportData = req.body;
        const updatedCaseReport = await CaseReport.updateCaseReport(id, caseReportData);
        res.json(updatedCaseReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Case Report']
        #swagger.description = 'Endpoint to list cases report' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const caseReport = await CaseReport.findAllCaseReport();
        res.json(caseReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Case Report']
        #swagger.description = 'Endpoint to find a specific case report' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const category = await CaseReport.findCaseReportById(id);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};