// backend/controllers/ratingController.js
const Rating = require('../models/ratingModel');
exports.submit = (req, res) => Rating.submitRating(req.body, (err) => err ? res.status(500).send(err) : res.send('Rating submitted'));
exports.update = (req, res) => Rating.updateRating(req.body, (err) => err ? res.status(500).send(err) : res.send('Rating updated'));
exports.getByUser = (req, res) => Rating.getRatingsByUser(req.params.userId, (err, rows) => err ? res.status(500).send(err) : res.json(rows));