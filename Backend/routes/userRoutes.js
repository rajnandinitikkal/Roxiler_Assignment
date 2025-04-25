// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, getAll } = require('../controllers/userController');
const { requireAuth, requireRole } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/all', requireAuth, requireRole('admin'), getAll);

module.exports = router;