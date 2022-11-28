const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event1Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  start: {
    type: Date,
    required: true,
    unique: true
  },
  end: {
    type: Date,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true,
    minlength: 8
  },
  venue: {
    type: String,
    required: true,
    minlength: 3
  }
},
  {
    collection: 'events1'
  });

const Event1 = mongoose.model('Event1', Event1Schema);

module.exports = Event1;