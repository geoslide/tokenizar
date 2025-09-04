
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const qrRoutes = require('./routes/qr.routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/qr', qrRoutes);

app.get('/', (req, res) => {
	res.send('API Tokenizar backend funcionando');
});

// Manejo de errores
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
	console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
