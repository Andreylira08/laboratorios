// services/pokeapi.service.js
const fetch = require('node-fetch'); 
const getPokemon = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return null;
    }
};

const getAllPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching all Pokémon:', error);
        return [];
    }
};

module.exports = { getPokemon, getAllPokemon };