const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/light-map-db');
mongoose.Promise = global.Promise;

module.exports = mongoose;