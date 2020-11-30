const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const voterSchema = new Schema({
    aadharcardno: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    pattern:"^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"
    },
  votername: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;
