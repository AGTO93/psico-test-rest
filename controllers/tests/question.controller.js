const QuestionService = require('../../services/tests/question.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Question']
        #swagger.description = 'Endpoint to create new question' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const questionData = req.body;
        const newQuestion = await QuestionService.createQuestion(questionData);
        res.json(newQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Question']
        #swagger.description = 'Endpoint to update question' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const questionData = req.body;
        const updatedQuestion = await QuestionService.updateQuestion(id, questionData);
        res.json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Question']
        #swagger.description = 'Endpoint to list questions' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const question = await QuestionService.findAllQuestions();
        res.json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Question']
        #swagger.description = 'Endpoint to find a specific question' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const question = await QuestionService.findQuestionById(id);
        res.json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};