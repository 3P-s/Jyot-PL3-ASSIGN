const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const gamesRouter = require('./routes/games');
app.use(express.json());
app.use('/api/games', gamesRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});