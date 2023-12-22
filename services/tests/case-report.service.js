const CaseReport = require('../../models/tests/case-report.model');

exports.createCaseReport = async (data) => {
    try {
        return await CaseReport.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateCaseReport = async (id, data) => {
    try {
        const caseReport = await CaseReport.findByPk(id);
        if (!caseReport) {
            throw new Error('CaseReport not found');
        }

        await caseReport.update(data);
        return caseReport;
    } catch (error) {
        throw error;
    }
};

exports.findAllCaseReport = async () => {
    try { 
        return await CaseReport.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findCaseReportById = async (id) => {
    try {
        const caseReport = await CaseReport.findByPk(id);
        if (!caseReport) {
            throw new Error('CaseReport not found');
        }
        return caseReport;
    } catch (error) {
        throw error;
    }
}

