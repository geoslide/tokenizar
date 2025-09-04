// Valida el dato recibido del QR
exports.validateQR = (req, res) => {
	const { qrData } = req.body;
	// Aquí iría la lógica real de validación
	if (!qrData) {
		return res.status(400).json({ success: false, message: 'No se recibió dato de QR' });
	}
	// Ejemplo: si el dato es "VALIDO" responde ok
	if (qrData === 'VALIDO') {
		return res.json({ success: true, message: 'QR válido' });
	}
	return res.status(401).json({ success: false, message: 'QR inválido' });
};
