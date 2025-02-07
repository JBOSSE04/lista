import React from 'react';

function CustomButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function CustomComponent() {
  const handleButtonClick = (buttonName) => {
    alert(`You clicked ${buttonName}`);
  };

  return (
    <div>
      <CustomButton onClick={() => handleButtonClick('Button 1')}>Button 1</CustomButton>
      <CustomButton onClick={() => handleButtonClick('Button 2')}>Button 2</CustomButton>
      <CustomButton onClick={() => handleButtonClick('Button 3')}>Button 3</CustomButton>
    </div>
  );
}

export default CustomComponent;
