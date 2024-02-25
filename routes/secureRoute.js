const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/auth');

// Example route where authentication is required
router.get('/secured', authenticateUser, (req, res) => {
  res.send('This is a secured route!');
});

module.exports = router;
