const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const swaggerRoutes = require('./routes/swagger.routes');
const sequelize = require('./config/database');


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
app.use('/api', userRoutes); // Todas las rutas bajo /api estarán protegidas


app.use('/swagger', swaggerRoutes);


const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Servidor iniciado en el puerto ${port}`);

    // Sincroniza todos los modelos con la base de datos
    try {
        await sequelize.sync();
        console.log('Modelos sincronizados con la base de datos.');
    } catch (error) {
        console.error('Error al sincronizar modelos con la base de datos:', error);
    }
});
