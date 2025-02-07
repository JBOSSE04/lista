import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const NotFound = () => {
  return (
    <div>
      <h2>404 - Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
