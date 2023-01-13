'use strict';

//const hbs = require('hbs');
const SpotifyWebApi = require('spotify-web-api-node');

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const mongoose = require('mongoose');
const baseRouter = require('./routes/base');
const soundRouter = require('./routes/sounds');
const profileRouter = require('./routes/authentication');

const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const app = express();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body['access_token']))
  .catch((error) =>
    console.log('Something went wrong when retrieving an access token', error)
  );

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(
  cors({
    ...(process.env.CLIENT_APP_ORIGINS && {
      origin: process.env.CLIENT_APP_ORIGINS.split(',')
    }),
    credentials: true
  })
);
app.use(express.json());

app.use('/', baseRouter);
app.use('/sounds', soundRouter);
app.use('/authentication', profileRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

// CLOUDINARY test

app.post('/audio/upload', async (req, res) => {
  console.log('my music');
  // Get the file name and extension with multer
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const fileExt = file.originalname.split('.').pop();
      const filename = `${new Date().getTime()}.${fileExt}`;
      cb(null, filename);
    }
  });

  // Filter the file to validate if it meets the required audio extension
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'audio/mp3' || file.mimetype === 'audio/mpeg') {
      cb(null, true);
    } else {
      cb(
        {
          message: 'Unsupported File Format'
        },
        false
      );
    }
  };

  // Set the storage, file filter and file size with multer
  const upload = multer({
    storage,
    limits: {
      fieldNameSize: 200,
      fileSize: 5 * 1024 * 1024
    },
    fileFilter
  }).single('audio');

  // upload to cloudinary
  upload(req, res, (err) => {
    if (err) {
      return res.send(err);
    }

    // SEND FILE TO CLOUDINARY
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
    const { path } = req.file; // file becomes available in req at this point

    const fName = req.file.originalname.split('.')[0];
    cloudinary.uploader.upload(
      path,
      {
        resource_type: 'raw',
        public_id: `AudioUploads/${fName}`
      },

      // Send cloudinary response or catch error
      (err, audio) => {
        if (err) return res.send(err);

        fs.unlinkSync(path);
        res.send(audio);
      }
    );
  });
});

const { NODE_ENV, PORT, MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`Database connected to URI "${MONGODB_URI}"`);
    app
      .listen(Number(PORT), () => {
        console.log(`Server listening to requests on port ${PORT}`);
        if (NODE_ENV === 'development') {
          console.log(`Visit http://localhost:${PORT} to develop your app`);
        }
      })
      .on('error', (error) => {
        console.log('There was a server error.', error);
        process.exit(1);
      });
  })
  .catch((error) => {
    console.log(
      `There was an error connecting to the database "${MONGODB_URI}"`,
      error
    );
  });
