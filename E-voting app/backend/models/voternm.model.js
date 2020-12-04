const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voterSchema = new Schema({
  fathername: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  dob: { type: Date, required: true },
    aadharcardno: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    pattern:"^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"
    },
    voterid: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      pattern:"^([a-zA-Z]){3}([0-9]){7}?$"
      },
  votername: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
