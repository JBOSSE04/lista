// import { useState } from 'react'

// import './App.css'
// import  {Login} from './login.jsx';



// function App() {
// var miDiv;
// var nombres = ["Arg", "churros", "chocolate", "argen"];
// var loquesea = false;
// var [numeroPulsaciones, setnumeroPulsaciones] = useState(0);

// function tratarEvento(){
// setnumeroPulsaciones(numeroPulsaciones+1);
// }


//   return (
//   <>
  
//     {numeroPulsaciones}
//     <button onclick={tratarEvento}>CcCyA</button>
//   </>    
//   )
// }


// Ejercicios 1º
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import CaptureClicks from './CaptureClicks';
import CustomComponent from './CustomComponent';
import StateAndProps from './StateAndProps';
import RenderList from './RenderList';
import RenderCustomList from './RenderCustomList';
import BuildForm from './BuildForm';
import RenderJSON from './RenderJSON';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ddd' }}>
        <Link to="/hello-world" style={{ margin: '0 10px' }}>Ejercicio 1</Link>
        <Link to="/capture-clicks" style={{ margin: '0 10px' }}>Ejercicio 2</Link>
        <Link to="/custom-component" style={{ margin: '0 10px' }}>Ejercicio 3</Link>
        <Link to="/state-and-props" style={{ margin: '0 10px' }}>Ejercicio 4</Link>
        <Link to="/render-list" style={{ margin: '0 10px' }}>Ejercicio 5</Link>
        <Link to="/render-custom-list" style={{ margin: '0 10px' }}>Ejercicio 6</Link>
        <Link to="/build-form" style={{ margin: '0 10px' }}>Ejercicio 7</Link>
        <Link to="/render-json" style={{ margin: '0 10px' }}>Ejercicio 8</Link>
      </nav>

      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/capture-clicks" element={<CaptureClicks />} />
        <Route path="/custom-component" element={<CustomComponent />} />
        <Route path="/state-and-props" element={<StateAndProps />} />
        <Route path="/render-list" element={<RenderList />} />
        <Route path="/render-custom-list" element={<RenderCustomList />} />
        <Route path="/build-form" element={<BuildForm />} />
        <Route path="/render-json" element={<RenderJSON />} />
      </Routes>
    </Router>
  );
}

export default App;
