const path = require('path');

const express = require('express');
const pug = require('pug');

const dataStore = require('./file_datastore');

const viewsRouter = express.Router();

viewsRouter.get('/', (req, res) => {
  const allPokemon = dataStore.getAll();
  res.render('index', {allPokemon: allPokemon});
});

module.exports = viewsRouter;
