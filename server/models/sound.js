'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    artist: {
      type: String,
      required: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      enum: ['Song', 'Sample', 'Podcast'],
      required: true
    },
    genre: {
      type: String,
      trim: true
    },
    format: {
      type: String,
      enum: ['MP3', 'WAV', 'AIFF'],
      required: true
    },
    image: {
      type: String
    }
  },
  {
    timestamp: true
  }
);

const Sound = mongoose.model('Sound', schema);

module.exports = Sound;
