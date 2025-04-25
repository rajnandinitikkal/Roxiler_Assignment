exports.createStore = (data, cb) => db.query('INSERT INTO stores SET ?', data, cb);
exports.getAllStores = (cb) => db.query('SELECT * FROM stores', cb);
exports.getStoreRatings = (storeId, cb) => db.query('SELECT * FROM ratings WHERE store_id = ?', [storeId], cb);
exports.getStoreAvgRating = (storeId, cb) => db.query('SELECT AVG(rating) as avg FROM ratings WHERE store_id = ?', [storeId], cb);