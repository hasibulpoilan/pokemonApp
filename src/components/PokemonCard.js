import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await axios.get(pokemon.url);
      setPokemonImage(response.data.sprites.front_default);
    };
    fetchPokemonImage();
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      <img src={pokemonImage} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
