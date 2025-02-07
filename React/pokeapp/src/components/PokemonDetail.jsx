import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error al obtener detalles del Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <div className="pokemon-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>⬅ Volver</button>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img
        src={
          pokemon.sprites.other["official-artwork"].front_default ||
          pokemon.sprites.front_default
        }
        alt={pokemon.name}
        className="pokemon-detail-image"
      />
      <p><strong>Tipo:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;
