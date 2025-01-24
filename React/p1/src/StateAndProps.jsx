import React, { useState } from 'react';

function StateAndProps() {
  const [count, setCount] = useState(0); // Inicializa el estado con 0

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Incrementar
      </button>
    </div>
  );
}

export default StateAndProps;
