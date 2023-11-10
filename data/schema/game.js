// Game Schema

import mongoose from "mongoose";

const Question4Schema = new mongoose.Schema({
  id: String,
  format: Number,
  question: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  correct: Number,
});

const Question2Schema = new mongoose.Schema({
  id: String,
  format: Number,
  question: String,
  correct: Boolean,
});

const GameSchema = new mongoose.Schema({
  id: String,
  questions: [Question4Schema | Question2Schema], // Use the defined schemas here
});

const GameModel = mongoose.models.games || mongoose.model('games', GameSchema);

export default GameModel;