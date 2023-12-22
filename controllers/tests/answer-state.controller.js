const AnswerState = require('../../services/tests/answer-state.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Answer State']
        #swagger.description = 'Endpoint to create new answer state' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const answerStateData = req.body;
        const newAnswerState = await AnswerState.createAnswerState(answerStateData);
        res.json(newAnswerState);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Answer State']
        #swagger.description = 'Endpoint to update answer state' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const answerStateData = req.body;
        const updatedAnswerState = await AnswerState.updateAnswerState(id, answerStateData);
        res.json(updatedAnswerState);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Answer State']
        #swagger.description = 'Endpoint to list answers state' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const answerState = await AnswerState.findAllAnswerState();
        res.json(answerState);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Answer State']
        #swagger.description = 'Endpoint to find a specific answer state' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const answerState = await AnswerState.findAnswerStateById(id);
        res.json(answerState);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};