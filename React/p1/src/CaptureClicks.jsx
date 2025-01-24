import React from 'react';

function CaptureClicks() {
  const handleClick = () => {
    alert('Clicked!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
}

export default CaptureClicks;
