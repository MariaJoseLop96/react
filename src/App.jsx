
import './App.css';
import './estilos/estilos.css'
import {Navbar} from './componentes/Navbar'
import React, { useState } from 'react'
import {ItemList} from './componentes/ItemList'
import Button from './componentes/Button';
import Counter from './componentes/Counter';
import Footer from './componentes/Footer';


function App() {
 
  // const [contador, setContador]  = useState(0)

  // const handleAdd = () => {
  //   console.log("quiero sumar");
  //   setContador (contador + 1)
  // }

  // const handleSubstract = () =>{
  //   console.log("quiero restar")
  // }



  return (
    <div className="App">
      <Navbar />

      <ItemList greeting = "desafio 1" />
      <div>  <Counter /> </div>
      <Footer/>
      
    </div>
    


  );
  

}




export default App;
