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

router.get('/', async (req, res) => {
  try {
    const games = await Game.find({});
    res.json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


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


router.delete('/:id', async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      res.status(404).json({ error: 'Game not found' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;