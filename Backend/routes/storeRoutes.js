// backend/routes/storeRoutes.js
const express = require('express');
const router = express.Router();
const { addStore, getStores, getRatings, getAverage } = require('../controllers/storeController');
const { requireAuth, requireRole } = require('../middleware/auth');

router.post('/', requireAuth, requireRole('admin'), addStore);
router.get('/', getStores);
router.get('/:id/ratings', getRatings);
router.get('/:id/average', getAverage);

module.exports = router;