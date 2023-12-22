const Category = require('../../models/tests/category.model');
const Option = require('../../models/tests/option.model');
const Question = require('../../models/tests/question.model');
const Subcategory = require('../../models/tests/subcategory.model');
const Version = require('../../models/tests/version.model');

exports.createVersion = async (data) => {
    try {
        return await Version.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateVersion = async (id, data) => {
    try {
        const version = await Version.findByPk(id);
        if (!version) {
            throw new Error('Version not found');
        }

        await version.update(data);
        return version;
    } catch (error) {
        throw error;
    }
};

exports.findAllVersions = async () => {
    try {
        return await Version.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findVersionById = async (id) => {
    try {
        const version = await Version.findByPk(id);
        if (!version) {
            throw new Error('Version not found');
        }
        return version;
    } catch (error) {
        throw error;
    }
}

/* exports.findVersionFullById = async (id) => {
    try {
        const version = {};
        const versionData = await Version.findByPk(id);

        version.version = versionData.dataValues;

        const categories = await Category.findAll({ where: { versionId: versionData.dataValues.id } });

        version.categories = [];

        for (const category of categories) {
            const subcategories = await Subcategory.findAll({ where: { categoryId: category.dataValues.id } });

            category.dataValues.subcategories = [];

            for (const subCategory of subcategories) {
                const questions = await Question.findAll({ where: { subcategoryId: subCategory.dataValues.id } });

                subCategory.dataValues.questions = [];

                for (const question of questions) {
                    const options = await Option.findAll({ where: { questionId: question.dataValues.id } });

                    question.dataValues.options = options.map(option => option.dataValues);

                    subCategory.dataValues.questions.push(question.dataValues);
                }

                category.dataValues.subcategories.push(subCategory.dataValues);
            }

            version.categories.push(category.dataValues);
        }

        if (!versionData) {
            throw new Error('Version not found');
        }

        return version;
    } catch (error) {
        throw error;
    }
}; */

exports.findVersionFullById = async (id) => {
    try {
        const version = {};
        const versionData = await Version.findByPk(id);

        version.version = versionData.dataValues;

        version.categories = [];

        const categories = await Category.findAll({ where: { versionId: versionData.dataValues.id } });

        for (const category of categories) {
            const subcategories = await Subcategory.findAll({ where: { categoryId: category.dataValues.id } });

            category.dataValues.subcategories = [];

            for (const subCategory of subcategories) {
                const questions = await Question.findAll({ where: { subcategoryId: subCategory.dataValues.id } });

                subCategory.dataValues.questions = [];

                for (const question of questions) {
                    const options = await Option.findAll({ where: { questionId: question.dataValues.id } });

                    question.dataValues.options = options.map(option => option.dataValues);

                    subCategory.dataValues.questions.push(question.dataValues);
                }

                category.dataValues.subcategories.push(subCategory.dataValues);
            }

            version.categories.push(category.dataValues);
        }

        if (!versionData) {
            throw new Error('Version not found');
        }

        return version;
    } catch (error) {
        throw error;
    }
};




