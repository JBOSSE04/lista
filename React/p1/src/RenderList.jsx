import React from 'react';

function RenderList() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']; // Array de animales

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Animales</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {animals.map((animal, index) => (
          <li key={index} style={{ margin: '5px 0', fontSize: '18px' }}>
            {animal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderList;
