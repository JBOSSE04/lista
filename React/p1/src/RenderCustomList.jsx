import React from 'react';

function CustomListItem({ item }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px', borderRadius: '5px' }}>
      {item}
    </div>
  );
}

function RenderCustomList() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div style={{ textAlign: 'center'}}>
      {animals.map((animal, index) => (
        <CustomListItem key={index} item={animal} />
      ))}
    </div>
  );
}

export default RenderCustomList; // Exportación por defecto
