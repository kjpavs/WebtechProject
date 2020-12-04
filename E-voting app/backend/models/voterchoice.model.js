const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const choiceSchema = new Schema({
  votername: { type: String, required: true },
  voterid: { type: String, required: true },
  choice: { type: String, required: true },
}, {
  timestamps: true,
});

const Voterchoice = mongoose.model('Voterchoice', choiceSchema);

module.exports = Voterchoice;
