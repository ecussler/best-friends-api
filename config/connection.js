const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bestfriendsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

