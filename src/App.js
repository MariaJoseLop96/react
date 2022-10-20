import logo from './logo.svg';
import './App.css';
import './estilos/estilos.css'
import {Navbar} from './componentes/Navbar'
import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FaShoppingCart />
      

    </div>
  );
  



}




export default App;
