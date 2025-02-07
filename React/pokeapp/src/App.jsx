import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { auth, signInWithGoogle, logout } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LandingPage from "./components/LandingPage";
import PokemonList from "./components/PokemonList";
import PokemonGame from "./components/pokegame";
import Ranking from "./components/Ranking";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/pokemon-list">Pokemons</Link>
          {user ? (
            <>
              <Link to="/jugar">Jugar</Link>
              <Link to="/ranking">Ranking</Link>
              <span className="user-info">{user.displayName}</span>
              <button className="logout-btn" onClick={logout}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/register">Registrarse</Link>
              <button className="google-btn" onClick={signInWithGoogle}>Google</button>
            </>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        <Route path="/jugar" element={user ? <PokemonGame /> : <Navigate to="/login" />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
