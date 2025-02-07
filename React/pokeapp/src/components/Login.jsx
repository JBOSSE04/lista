import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail } from "../firebase"; // 🔹 Conectar con Firebase
import "./App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 🔹 Estado para manejar errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      await loginWithEmail(email, password);
      navigate("/"); // 🔹 Redirigir al usuario a la página de inicio
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales."); // 🔹 Manejo de errores
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>} {/* 🔹 Mostrar error */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
