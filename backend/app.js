const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const searchRoutes = require('./routes/search');

mongoose.connect('mongodb://localhost/pestDetectionv2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected!")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/user', userRoutes);
app.use('/api/search', searchRoutes);

module.exports = app;
