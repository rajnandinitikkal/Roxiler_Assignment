// backend/routes/ratingRoutes.js
const express = require('express');
const router = express.Router();
const { submit, update, getByUser } = require('../controllers/ratingController');
const { requireAuth, requireRole } = require('../middleware/auth');

router.post('/', requireAuth, requireRole('user'), submit);
router.put('/', requireAuth, requireRole('user'), update);
router.get('/:userId', requireAuth, getByUser);

module.exports = router;