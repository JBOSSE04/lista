import React, { useState } from 'react';

function BuildForm() {
  const [firstName, setFirstName] = useState(''); // Estado para el primer nombre
  const [lastName, setLastName] = useState('');  // Estado para el apellido

  const handleSubmit = () => {
    alert(`Hello ${firstName} ${lastName}!`); // Muestra un saludo dinámico
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Formulario</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ margin: '10px', padding: '10px', fontSize: '16px', width: '200px' }}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ margin: '10px', padding: '10px', fontSize: '16px', width: '200px' }}
      />
      <button
        onClick={handleSubmit}
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Greet Me
      </button>
    </div>
  );
}

export default BuildForm;
