'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  {
    timestamp: true
  }
);

const Sound = mongoose.model('Sound', schema);

module.exports = Sound;
