const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
  // ... other fields
});
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;



