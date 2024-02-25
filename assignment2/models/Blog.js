const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // ... other fields
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;




