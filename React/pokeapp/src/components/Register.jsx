import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail } from "../firebase"; // 🔹 IMPORTACIÓN CORRECTA
import "./App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 🔹 Manejo de errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      await registerWithEmail(email, password, name);
      navigate("/"); // 🔹 Redirigir al usuario a la página de inicio después del registro
    } catch (error) {
      setError("Error al registrarse. Puede que el correo ya esté en uso."); // 🔹 Manejo de errores
    }
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      {error && <p className="error-message">{error}</p>} {/* 🔹 Mostrar error */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
