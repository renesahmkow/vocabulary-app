const mongoose = require('mongoose');

const vocabularSchema = new mongoose.Schema({
  english: {
    type: String,
    required: true
  },
  german: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Vocabulary', vocabularSchema);
