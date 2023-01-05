'use strict';

const Sound = require('../models/sound');
const express = require('express');

const router = new express.Router();

router.get('/', (req, res, next) => {
  Sound.find()
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Sound.findById(id)
    .then((sound) => res.json({ sound }))
    .catch((err) => next(err));
});

router.get('/search', (req, res, next) => {
  const { term } = req.query;

  Sound.find({
    $or: term.split(' ').map((word) => {
      return { message: new RegExp(word, 'ig') };
    })
  })
    .sort({ createdAt: -1 })
    .limit(20)
    .then((sounds) => {
      res.json({ sounds });
    })
    .catch((error) => {
      next(error);
    });
});

//not finished yet
router.get('/songs', (req, res, next) => {
  Sound.find()
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/samples', (req, res, next) => {
  Sound.find()
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/podcasts', (req, res, next) => {
  Sound.find()
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

//test commit
router.get('/podcasts', (req, res, next) => {
  Sound.find()
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

module.exports = router;
