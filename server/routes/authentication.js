'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { routeGuard } = require('../middleware/routeGuard');

const saltRounds = 15;

router.get('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  Sound.findById(id)
    .then((user) => res.json({ user }))
    .catch((err) => next(err));
});

router.post('/create', (req, res, next) => {
  const { name, email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).json({ message: 'This user already exist' });
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return User.create({ name, email, password: hashedPassword });
    })
    .then((createdUser) => {
      const { name, email, _id } = createdUser;
      const user = { name, email, _id };
      res.json({ user: user });
    })
    .catch((err) => next(err));
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'invalid credentials.' });
      }
      const passwordCorrect = bcrypt.compareSync(password, user.password);
      if (passwordCorrect) {
        const { _id, email, name } = user;
        const payload = { _id, email, name };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: 'HS256',
          expiresIn: '48h'
        });
        res.json({ authToken: authToken });
      } else {
        res.status(401).json({ message: 'invalid credentials.' });
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
