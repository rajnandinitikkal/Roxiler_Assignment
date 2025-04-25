// backend/controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
  const { name, email, password, role, address } = req.body;
  if (!/^(?=.*[A-Z])(?=.*\W).{8,16}$/.test(password)) return res.status(400).send('Invalid password format');
  const hash = bcrypt.hashSync(password, 10);
  User.createUser({ name, email, password: hash, role, address }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('User created');
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findUserByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(401).send('User not found');
    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) return res.status(403).send('Wrong password');
    const token = jwt.sign({ id: user.id, role: user.role }, 'secretKey');
    res.json({ token, role: user.role });
  });
};

exports.getAll = (req, res) => User.getAllUsers((err, rows) => err ? res.status(500).send(err) : res.json(rows));