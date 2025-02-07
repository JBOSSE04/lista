import React from 'react';

const PokemonCard = ({ pokemon, onShowDetail }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <button onClick={() => onShowDetail(pokemon)}>Saber Más</button>
      
    </div>
  );
};

/* */

export default PokemonCard;