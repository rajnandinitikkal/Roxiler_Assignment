// backend/models/ratingModel.js
exports.submitRating = (data, cb) => db.query('INSERT INTO ratings SET ?', data, cb);
exports.updateRating = (data, cb) => db.query('UPDATE ratings SET rating = ? WHERE user_id = ? AND store_id = ?', [data.rating, data.user_id, data.store_id], cb);
exports.getRatingsByUser = (userId, cb) => db.query('SELECT * FROM ratings WHERE user_id = ?', [userId], cb);