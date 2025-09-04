
const jwt = require('jsonwebtoken');
const users = [];

// Controlador de login
exports.login = (req, res) => {
	const { email, password } = req.body;
	const user = users.find(u => u.email === email && u.password === password);
	if (!user) {
		return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
	}
	// Generar token JWT
	const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
	return res.json({ success: true, message: 'Login exitoso', token });
};

// Controlador de registro
exports.register = (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ success: false, message: 'Email y password requeridos' });
	}
	const exists = users.find(u => u.email === email);
	if (exists) {
		return res.status(409).json({ success: false, message: 'El usuario ya existe' });
	}
	users.push({ email, password });
	return res.json({ success: true, message: 'Usuario registrado correctamente' });
};
