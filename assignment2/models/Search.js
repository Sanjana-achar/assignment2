const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  suggestion: { type: String, required: true },
  // ... other fields
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
