// Controlador de login
exports.login = (req, res) => {
	const { email, password } = req.body;
	// Aquí iría la lógica real de autenticación
	if (email === 'demo@tokeniza.org' && password === '123456') {
		return res.json({ success: true, message: 'Login exitoso', token: 'demo-token' });
	}
	return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
};

// Controlador de registro
exports.register = (req, res) => {
	const { email, password } = req.body;
	// Aquí iría la lógica real de registro
	if (!email || !password) {
		return res.status(400).json({ success: false, message: 'Email y password requeridos' });
	}
	// Simula registro exitoso
	return res.json({ success: true, message: 'Usuario registrado correctamente' });
};
