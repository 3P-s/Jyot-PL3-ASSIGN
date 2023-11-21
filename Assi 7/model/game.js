const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  gameName: String,
  publisher: String,
  releaseDate: String,
  rating: Number,
  averageScore: Number,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
