import React from 'react';

function CustomButton({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
      {children}
    </button>
  );
}

function CustomComponent() {
  const handleButtonClick = (buttonName) => {
    alert(`You clicked ${buttonName}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CustomButton onClick={() => handleButtonClick('Button 1')}>Button 1</CustomButton>
      <CustomButton onClick={() => handleButtonClick('Button 2')}>Button 2</CustomButton>
      <CustomButton onClick={() => handleButtonClick('Button 3')}>Button 3</CustomButton>
    </div>
  );
}

export default CustomComponent;
