const express = require('express');
const router = express.Router();
const { validateQR } = require('../controllers/qr.controller');

// POST /api/qr/validate
router.post('/validate', validateQR);

module.exports = router;
