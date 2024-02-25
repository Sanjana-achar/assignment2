
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const searchRoutes = require('./routes/search');
const secureRoute = require('./routes/secureRoute'); // Import the secureRoute

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(express.json());

// Include routes
app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
app.use('/search', searchRoutes);
app.use('/secure', secureRoute); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

