const express = require('express');
const router = express.Router();

// TODO: remove this
router.get('/', (req, res) => {
  res.send('In home page');
});

module.exports = router;
