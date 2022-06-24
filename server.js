'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
// const path = require("path");

const app = express();

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
// app.set('views', './views/pug')

// app.set("views", path.join(__dirname, "views"));

const ruta = process.cwd() + '/views/pug/';
// app.route('/').get((req, res) => { // Original
app.route('/').get((req, res) => {
  // res.render('Load your view here'); // original
  res.render(ruta +'index',{title: 'Hello', message: 'Please login'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
