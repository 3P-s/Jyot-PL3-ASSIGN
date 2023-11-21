const express = require('express');
const router = express.Router();
const Game = require('../model/game');

router.post('/insertMany', async (req, res) => {
  const gamesData = req.body;
  try {
    const insertedGames = await Game.insertMany(gamesData);

    const groupBySingleField = await Game.aggregate([
      { $group: { _id: "$fieldName", count: { $sum: 1 } } }
    ]);

    const groupByMultipleFields = await Game.aggregate([
      { $group: { _id: { field1: "$field1", field2: "$field2" }, count: { $sum: 1 } } }
    ]);

    const groupByMultipleExpressions = await Game.aggregate([
      { $group: { _id: null, avgField: { $avg: "$field" }, totalCount: { $sum: 1 } } }
    ]);

    const groupByConditionalStatements = await Game.aggregate([
      { $group: { _id: { $cond: [{ $gte: ["$field", 5] }, "Greater than or equal to 5", "Less than 5"] }, count: { $sum: 1 } } }
    ]);
    const groupByNestedField = await Game.aggregate([
      { $group: { _id: "$nestedField.fieldName", count: { $sum: 1 } } }
    ]);
    res.status(201).json({
      insertedGames,
      groupBySingleField,
      groupByMultipleFields,
      groupByMultipleExpressions,
      groupByConditionalStatements,
      groupByNestedField
    });

    console.log('Data inserted and grouped successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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