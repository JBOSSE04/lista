// export function Login(){
//     var titulo = "flipado";
//     var contenido;
//     var estaLogueado = false;
//     if (estaLogueado){
//         contenido =       <h1>Este es un login</h1>
//         } else {
//             contenido =       <h1>Esto no es un login</h1>
//     }
//     return(
//       <>
//       <h1>{titulo}</h1>
//       {contenido}
//     </> 
//     )
    
//     }

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Ejercicio 1: Hello World
export function HelloWorld() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '50px', backgroundColor: 'lightblue', textAlign: 'center' }}>
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
}

// Ejercicio 2: Capturar clics de usuario
export function CaptureClicks() {
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

// Ejercicio 3: Componente personalizado
export function CustomButton({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
      {children}
    </button>
  );
}

export function CustomComponent() {
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

// Ejercicio 4: Estado y Props
export function StateAndProps() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
}

// Ejercicio 5: Mapear una lista
export function RenderList() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <ul>
        {animals.map((animal, index) => (
          <li key={index} style={{ listStyleType: 'none', margin: '5px 0', fontSize: '18px' }}>
            {animal}
          </li>
        ))}
      </ul>
    </div>
  );
}