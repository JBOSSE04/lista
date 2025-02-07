import React, { useState, useEffect } from "react";
import { auth, updateRanking } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";

const PokemonGame = () => {
  const [pokemon, setPokemon] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setScore(localStorage.getItem(`score-${currentUser.uid}`) || 0);
      }
    });

    fetchRandomPokemon();
  }, []);

  const fetchRandomPokemon = async () => {
    setLoading(true);
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    setPokemon(data);
    setLoading(false);
    setMessage("");
    setUserGuess("");
  };

  const handleGuess = async () => {
    if (userGuess.toLowerCase() === pokemon.name.toLowerCase()) {
      setMessage(`¡Correcto! Es ${pokemon.name}.`);
      if (user) {
        const newScore = parseInt(score) + 1;
        setScore(newScore);
        localStorage.setItem(`score-${user.uid}`, newScore);
        await updateRanking(user.uid, newScore);
      }
    } else {
      setMessage("Incorrecto. Intenta de nuevo.");
    }
  };

  if (loading) return <p>Cargando Pokémon...</p>;

  return (
    <div className="pokemon-game">
      <h2>Adivina el Pokémon</h2>
      <img src={pokemon.sprites.front_default} alt="Pokémon" />
      <input type="text" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
      <button onClick={handleGuess}>Adivinar</button>
      <p>{message}</p>
      <button onClick={fetchRandomPokemon}>Nuevo Pokémon</button>

      {user && (
        <div className="score-container">
          <h3>🎯 Aciertos: {score}</h3>
        </div>
      )}
    </div>
  );
};

export default PokemonGame;
