const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  genre: String,
  rating: Number,
  achievements: [String],
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;