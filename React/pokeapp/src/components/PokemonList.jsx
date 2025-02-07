import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const generations = [
  { id: 1, name: "Generación 1 (Kanto)", range: [1, 151] },
  { id: 2, name: "Generación 2 (Johto)", range: [152, 251] },
  { id: 3, name: "Generación 3 (Hoenn)", range: [252, 386] },
  { id: 4, name: "Generación 4 (Sinnoh)", range: [387, 493] },
  { id: 5, name: "Generación 5 (Unova)", range: [494, 649] },
  { id: 6, name: "Generación 6 (Kalos)", range: [650, 721] },
  { id: 7, name: "Generación 7 (Alola)", range: [722, 809] },
  { id: 8, name: "Generación 8 (Galar)", range: [810, 898] }
];

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(1); // Filtra por la primera generación por defecto
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Función para obtener Pokémon por generación
  const fetchPokemonsByGeneration = async (genId) => {
    setLoading(true);
    const selectedGen = generations.find((g) => g.id === genId);
    if (!selectedGen) return;

    const [startId, endId] = selectedGen.range;
    const allPokemons = [];

    try {
      for (let i = startId; i <= endId; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        allPokemons.push(data);
      }

      // Ordenar por ID y actualizar estado
      setPokemons(allPokemons.sort((a, b) => a.id - b.id));
    } catch (error) {
      console.error("Error al obtener Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

/* 

*/

  useEffect(() => {
    fetchPokemonsByGeneration(generation);
  }, [generation]);

  return (
    <div className="pokemon-list-container">
      <h2>Lista de Pokemon</h2>

      <div className="filter-container">
        <label htmlFor="generation-select">Filtrar por Generación:</label>
        <select
          id="generation-select"
          value={generation}
          onChange={(e) => setGeneration(Number(e.target.value))}
        >
          {generations.map((gen) => (
            <option key={gen.id} value={gen.id}>
              {gen.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? <p>Cargando Pokémon...</p> : (
        <div className="pokemon-grid">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="pokemon-card"
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            >
              <img
                src={
                  pokemon.sprites.other["official-artwork"].front_default ||
                  pokemon.sprites.front_default ||
                  pokemon.sprites.other["dream_world"].front_default ||
                  "https://via.placeholder.com/150"
                }
                alt={pokemon.name}
                className="pokemon-image list-image"
              />
              <h3>#{pokemon.id} {pokemon.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );    
};

export default PokemonList;
