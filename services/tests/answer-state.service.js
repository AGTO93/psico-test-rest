const AnswerState = require('../../models/tests/answer-state.model');

exports.createAnswerState = async (data) => {
    try {
        return await AnswerState.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateAnswerState = async (id, data) => {
    try {
        const answerState = await AnswerState.findByPk(id);
        if (!answerState) {
            throw new Error('AnswerState not found');
        }

        await answerState.update(data);
        return answerState;
    } catch (error) {
        throw error;
    }
};

exports.findAllAnswerState = async () => {
    try {
        return await AnswerState.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findAnswerStateById = async (id) => {
    try {
        const answerState = await AnswerState.findByPk(id);
        if (!answerState) {
            throw new Error('AnswerState not found');
        }
        return answerState;
    } catch (error) {
        throw error;
    }
}

