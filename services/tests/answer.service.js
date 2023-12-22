const Answer = require('../../models/tests/answer.model');

exports.createAnswer = async (data) => {
    try {
        return await Answer.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateAnswer = async (id, data) => {
    try {
        const answer = await Answer.findByPk(id);
        if (!answer) {
            throw new Error('Answer not found');
        }

        await answer.update(data);
        return answer;
    } catch (error) {
        throw error;
    }
};

exports.findAllAnswers = async () => {
    try { 
        return await Answer.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findAnswerById = async (id) => {
    try {
        const answer = await Answer.findByPk(id);
        if (!answer) {
            throw new Error('Answer not found');
        }
        return answer;
    } catch (error) {
        throw error;
    }
}

