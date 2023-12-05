// db.js
const mongoose = require('mongoose');

// Replace 'your-connection-string' with your MongoDB Atlas connection string
const uri = 'mongodb+srv://ahsem:GMcunning32@cluster0.f3k2hxd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
