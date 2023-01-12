'use strict';

const Sound = require('../models/sound');
const express = require('express');
const { route } = require('./base');
const { routeGuard } = require('./../middleware/routeGuard');
const SpotifyWebApi = require('spotify-web-api-node');

const router = new express.Router();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then((data) => {
  spotifyApi.setAccessToken(data.body['access_token']);
  console.log(
    'Spotify was correctly authenticated on the server side',
    spotifyApi.getAccessToken()
  );
});

// Get Routers

router.get('/', (req, res, next) => {
  Sound.find()
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/search', (req, res, next) => {
  const { term } = req.query;

  spotifyApi
    .searchArtists(term)
    .then((results) =>
      res.json({ artists: results.body.artists.items.map((item) => item.name) })
    )
    .catch((error) =>
      console.log('Something went wrong when retrieving an access token', error)
    );

  // Sound.find({
  //   $or: term.split(' ').map((word) => {
  //     return { message: new RegExp(word, 'ig') };
  //   })
  // })
  //   .sort({ createdAt: -1 })
  //   .limit(20)
  //   .then((sounds) => {
  //     res.json({ sounds });
  //   })
  //   .catch((error) => {
  //     next(error);
  //   });
});

router.get('/songs', (req, res, next) => {
  Sound.find({ category: 'Song' })
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/samples', (req, res, next) => {
  Sound.find({ category: 'Sample' })
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/podcasts', (req, res, next) => {
  Sound.find({ category: 'Podcast' })
    .then((sounds) => res.json({ sounds }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Sound.findById(id)
    .then((sound) => res.json({ sound }))
    .catch((err) => next(err));
});
//Post Router

router.post('/', routeGuard, (req, res, next) => {
  const { artist, title, category, genre, format, image } = req.body;
  Sound.create({ artist, title, category, genre, format, image })
    .then((sound) => res.json({ sound }))
    .catch((err) => next(err));
});

//Patch Router

router.patch('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  const { artist, title, category, genre, format, image } = req.body;
  Sound.findByIdAndUpdate(
    id,
    { artist, title, category, genre, format, image },
    { new: true }
  )
    .then((sound) => res.json({ sound }))
    .catch((err) => next(err));
});

//Delete Router

router.delete('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  Sound.findByIdAndDelete(id)
    .then(() => res.json({ success: true }))
    .catch((err) => next(err));
});

module.exports = router;
