// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

exports.requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('Unauthorized');
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
};

exports.requireRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.status(403).send('Forbidden: Insufficient Role');
  next();
};
