// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();

// Mock registration route
app.post('/api/users/register', (req, res) => {
  const { name, email, password, address, role } = req.body;
  
  // Simulate saving user data (e.g., in a database)
  console.log('Received registration data:', req.body);

  // Mock response for successful registration
  res.status(200).json({ message: 'Registration successful!' });
});
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;