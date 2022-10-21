import logo from './logo.svg';
import './App.css';
import './estilos/estilos.css'
import {Navbar} from './componentes/Navbar'
import React from 'react'
import {ItemList} from './componentes/ItemList'

function App() {
  return (
    <div className="App">
      <Navbar />


      <ItemList greeting = "desafio 1" />
      
    </div>
  );
  



}




export default App;
