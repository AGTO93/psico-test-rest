const Question = require('../../models/tests/question.model');

exports.createQuestion = async (data) => {
    try {
        return await Question.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateQuestion = async (id, data) => {
    try {
        const question = await Question.findByPk(id);
        if (!question) {
            throw new Error('Question not found');
        }

        await question.update(data);
        return question;
    } catch (error) {
        throw error;
    }
};

exports.findAllQuestions = async () => {
    try { 
        return await Question.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findQuestionById = async (id) => {
    try {
        const question = await Question.findByPk(id);
        if (!question) {
            throw new Error('Question not found');
        }
        return question;
    } catch (error) {
        throw error;
    }
}

