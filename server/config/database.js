const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/bike');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

mongoose.Promise = global.Promise;

// file.js

// file.js.bak

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
