const express = require('express');
const router = express.Router();
const Game = require('../model/game');

router.post('/', async (req, res) => {
  const { name, genre, rating } = req.body;
  try {
    const newGame = new Game({ name, genre, rating, achievements: [] });
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
    console.log('Data saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(games);
    }
  });
});

// Retrieve a game by ID
router.get('/:id', (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (!game) {
        res.status(404).json({ error: 'Game not found' });
      } else {
        res.json(game);
      }
    }
  });
});

// Update a game by ID
router.put('/:id', (req, res) => {
  Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, game) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (!game) {
          res.status(404).json({ error: 'Game not found' });
        } else {
          res.json(game);
        }
      }
    }
  );
});

// Delete a game by ID
router.delete('/:id', (req, res) => {
  Game.findByIdAndRemove(req.params.id, (err, game) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (!game) {
        res.status(404).json({ error: 'Game not found' });
      } else {
        res.status(204).end();
      }
    }
  });
});

module.exports = router;