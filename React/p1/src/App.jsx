import { useState } from 'react'

import './App.css'
import  {Login} from './login.jsx';



function App() {
var miDiv;
var nombres = ["Arg", "churros", "chocolate", "argen"];
var loquesea = false;
var [numeroPulsaciones, setnumeroPulsaciones] = useState(0);

function tratarEvento(){
setnumeroPulsaciones(numeroPulsaciones+1);
}


  return (
  <>
  
    {numeroPulsaciones}
    <button onclick={tratarEvento}>CcCyA</button>
  </>    
  )
}

export default App

