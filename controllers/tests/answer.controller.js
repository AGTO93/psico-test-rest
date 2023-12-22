const Answer = require('../../services/tests/answer.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Answer']
        #swagger.description = 'Endpoint to create new answer' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const answerData = req.body;
        const newAnswer = await Answer.createAnswer(answerData);
        res.json(newAnswer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Answer']
        #swagger.description = 'Endpoint to update answer' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const answerData = req.body;
        const updatedAnswer = await Answer.updateAnswer(id, answerData);
        res.json(updatedAnswer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Answer']
        #swagger.description = 'Endpoint to list answers' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const answer = await Answer.findAllAnswers();
        res.json(answer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Answer']
        #swagger.description = 'Endpoint to find a specific answer' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const answer = await Answer.findAnswerById(id);
        res.json(answer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};