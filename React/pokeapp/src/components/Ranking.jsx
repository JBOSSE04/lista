import React, { useEffect, useState } from "react";
import { getRanking } from "../firebase";
import "./App.css";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      const data = await getRanking();
      setRanking(data);
    };

    fetchRanking();
  }, []);

  return (
    <div className="ranking-container">
      <h2>🏆 Ranking Global</h2>
      <table>
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Jugador</th>
            <th>Puntuación</th>
          </tr>
        </thead>
        <tbody>
          {ranking.length > 0 ? (
            ranking.map((player, index) => (
              <tr key={player.id}>
                <td>#{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score} pts</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay jugadores en el ranking aún.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
