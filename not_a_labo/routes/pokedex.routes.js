// routes/pokedex.routes.js
const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedex.controller');

router.get('/', pokedexController.getIndex);
router.get('/pokemon/:name', pokedexController.getPokemonDetails);

module.exports = router;   