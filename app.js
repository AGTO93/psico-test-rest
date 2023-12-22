const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const syncModels = require('./config/syncModels');

// routes
const authRoutes = require('./routes/security/auth.routes');
const userRoutes = require('./routes/security/user.routes');
const countryRoutes = require('./routes/business/country.routes');
const cityRoutes = require('./routes/business/city.routes');
const employeeRoutes = require('./routes/business/employee.routes');
const patientRoutes = require('./routes/business/patient.routes');
const genderRoutes = require('./routes/business/gender.routes');
const documentTypeRoutes = require('./routes/business/document-type.routes');
const employeePatientRoutes = require('./routes/business/employee-patient.routes');
const versionRoutes = require('./routes/tests/version.routes');
const typeRoutes = require('./routes/tests/type.routes');
const suboptionRoutes = require('./routes/tests/suboption.routes');
const subcategoryRoutes = require('./routes/tests/subcategory.routes');
const questionRoutes = require('./routes/tests/question.routes');
const optionRoutes = require('./routes/tests/option.routes');
const dataSheetHeaderRoutes = require('./routes/tests/data-sheet-header.routes');
const dataSheetBodyRoutes = require('./routes/tests/data-sheet-body.routes');
const categoryRoutes = require('./routes/tests/category.routes');
const caseReportRoutes = require('./routes/tests/case-report.routes');
const answerRoutes = require('./routes/tests/answer.routes');
const answerStateRoutes = require('./routes/tests/answer-state.routes');

const swaggerRoutes = require('./routes/swagger.routes');


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Ruta pública que no requiere autenticación
app.get('/public', (req, res) => {
    res.json({ message: 'Ruta pública accesible sin autenticación' });
});

// Ruta para probar la conexión a la base de datos
app.get('/testdb', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        res.status(500).send('Error al conectar a la base de datos.');
    }
});

// URLs no protegidas para inicio y cierre se sesión
app.use('/auth', authRoutes);

// Rango de URLs protegidas por el middleware de autenticación
// Todas las rutas bajo /api estarán protegidas
app.use('/api', userRoutes);
app.use('/api', countryRoutes);
app.use('/api', cityRoutes);
app.use('/api', genderRoutes);
app.use('/api', employeeRoutes);
app.use('/api', patientRoutes);
app.use('/api', documentTypeRoutes);
app.use('/api', employeePatientRoutes);

app.use('/api', versionRoutes);
app.use('/api', typeRoutes);
app.use('/api', suboptionRoutes);
app.use('/api', subcategoryRoutes);
app.use('/api', questionRoutes);
app.use('/api', optionRoutes);
app.use('/api', dataSheetHeaderRoutes);
app.use('/api', dataSheetBodyRoutes);
app.use('/api', categoryRoutes);
app.use('/api', caseReportRoutes);
app.use('/api', answerRoutes);
app.use('/api', answerStateRoutes);


app.use('/swagger', swaggerRoutes);


const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Servidor iniciado en el puerto ${port}`);

    // Sincroniza todos los modelos con la base de datos
    try {
        await sequelize.sync({ alter: false });
        syncModels();
        console.log('Modelos sincronizados con la base de datos.');
    } catch (error) {
        console.error('Error al sincronizar modelos con la base de datos:', error);
    }
});
