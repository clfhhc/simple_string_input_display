const express = require('express');
const db = require('../database');
const router = express.Router();

// handle GET requests for /input
router.get('/', async (req, res) => {
  try {
    const data = await db.getHistory();
    res.status(200).json({ inputHistory: data });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const { stringToInput } = req.body;
    await db.insertInput(stringToInput);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: req.body });
  }
});

module.exports = router;
