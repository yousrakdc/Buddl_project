const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const dataRoutes = require('./routes/data.js');

const app = express();

// CORS middleware to allow frontend access
app.use(cors({
  origin: 'http://localhost:8080'
}));

// Middleware to handle JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/buddldb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion MongoDB:', err));

// Routes
app.use('/data', dataRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
