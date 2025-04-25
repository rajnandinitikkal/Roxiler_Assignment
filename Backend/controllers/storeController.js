// // backend/controllers/storeController.js
// const db = require('../config/db.js');

// // Get all stores
// exports.getStores = (req, res) => {
//   db.query('SELECT * FROM stores', (err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// };

// // Add a new store
// exports.addStore = (req, res) => {
//   const { name, email, address, owner_id } = req.body;
//   const store = { name, email, address, owner_id };
//   db.query('INSERT INTO stores SET ?', store, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.status(201).json({ message: 'Store added successfully' });
//   });
// };





// backend/controllers/storeController.js
const Store = require('../models/storeModel');
exports.addStore = (req, res) => Store.createStore(req.body, (err) => err ? res.status(500).send(err) : res.send('Store added'));
exports.getStores = (req, res) => Store.getAllStores((err, rows) => err ? res.status(500).send(err) : res.json(rows));
exports.getRatings = (req, res) => Store.getStoreRatings(req.params.id, (err, rows) => err ? res.status(500).send(err) : res.json(rows));
exports.getAverage = (req, res) => Store.getStoreAvgRating(req.params.id, (err, rows) => err ? res.status(500).send(err) : res.json(rows[0]));
