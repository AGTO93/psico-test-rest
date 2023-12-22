const Role = require('../models/security/role.model');
const UserRole = require('../models/security/user-roles.model');
const Gender = require('../models/business/gender.model');
const City = require('../models/business/city.model');
const Country = require('../models/business/country.model');
const Employee = require('../models/business/employee.model');
const Patient = require('../models/business/patient.model');
const EmployeePatient = require('../models/business/employee-patient.model');
const Answer = require('../models/tests/answer.model');
const AnswerState = require('../models/tests/answer-state.model');
const Category = require('../models/tests/category.model');
const Option = require('../models/tests/option.model');
const Question = require('../models/tests/question.model');
const Subcategory = require('../models/tests/subcategory.model');
const Suboption = require('../models/tests/suboption.model');
const Type = require('../models/tests/type.model');
const Version = require('../models/tests/version.model');
const DocumentType = require('../models/business/document-type.model');
const DataSheetHeader = require('../models/tests/data-sheet-header.model');
const dataSheetBody = require('../models/tests/data-sheet-body.model');
const CaseReport = require('../models/tests/case-report.model');
const User = require('../models/security/user.model');

const syncModels = async () => {
    try {

        // security schema
        await User.sync();
        await Role.sync();
        await UserRole.sync();

        // business schema
        await Gender.sync();
        await City.sync();
        await Country.sync();        
        await Employee.sync();
        await Patient.sync();
        await EmployeePatient.sync();
        await DocumentType.sync();

        // tests schema
        await CaseReport.sync();
        await dataSheetBody.sync();
        await DataSheetHeader.sync();
        await Answer.sync();
        await AnswerState.sync();
        await Category.sync();
        await Option.sync();
        await Question.sync();
        await Subcategory.sync();
        await Suboption.sync();
        await Type.sync();
        await Version.sync();
    } catch (error) {
        console.error('Error al sincronizar modelos con la base de datos:', error);
    }
};

module.exports = syncModels;