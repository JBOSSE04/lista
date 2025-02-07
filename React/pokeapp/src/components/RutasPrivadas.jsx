import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 🔹 Asegúrate de tener el contexto de autenticación

const RutasPrivadas = () => {
  const { user } = useAuth(); // Obtener el usuario autenticado

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RutasPrivadas;
