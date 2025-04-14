// controllers/pokedex.controller.js
const pokeapiService = require('../services/pokeapi.service');

exports.getIndex = async (req, res) => {
    const pokemonList = await pokeapiService.getAllPokemon();
    res.render('pokedex', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        csrfToken: req.csrfToken(),
        privilegios: req.session.privilegios || [],
        pokemon: pokemonList,
    });
};

exports.getPokemonDetails = async (req, res) => {
    const { name } = req.params;
    const pokemon = await pokeapiService.getPokemon(name);
    if (pokemon) {
        res.render('pokedex-details', {
            isLoggedIn: req.session.isLoggedIn || false,
            username: req.session.username || '',
            csrfToken: req.csrfToken(),
            privilegios: req.session.privilegios || [],
            pokemon: pokemon,
        });
    } else {
        res.status(404).send('Pokémon not found');
    }
};