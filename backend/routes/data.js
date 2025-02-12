const express = require('express');
const Data = require('../models/Data.js');

const router = express.Router();

// Route to retrieve data
router.get('/', async (req, res) => {
    try {
      const data = await Data.find(); // Retrieve all documents
      console.log('Données récupérées depuis MongoDB:', JSON.stringify(data, null, 2));  // Detailed log
      if (data && data.length > 0) {
        return res.json(data);
      } else {
        console.log('Aucune donnée trouvée dans la collection.');
        return res.status(404).json({ message: 'Aucune donnée trouvée' });
      }
    } catch (error) {
      console.error('Erreur serveur:', error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  
module.exports = router;