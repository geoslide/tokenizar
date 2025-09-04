const express = require('express');
const router = express.Router();
const { validateQR } = require('../controllers/qr.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// POST /api/qr/validate (protegido)
router.post('/validate', authMiddleware, validateQR);

module.exports = router;
