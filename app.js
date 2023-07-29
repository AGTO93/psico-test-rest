const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Ruta pública que no requiere autenticación
app.get('/public', (req, res) => {
    res.json({ message: 'Ruta pública accesible sin autenticación' });
});

// URLs no protegidas para inicio y cierre se sesión
app.use('/auth', authRoutes);

// Rango de URLs protegidas por el middleware de autenticación
app.use('/api', userRoutes); // Todas las rutas bajo /api estarán protegidas


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
