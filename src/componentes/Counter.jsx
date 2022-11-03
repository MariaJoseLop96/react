import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [contador, setContador]  = useState(0)

  const handleAdd = () => {
    console.log("quiero sumar");
    setContador (contador + 1)
  }

  const handleSubstract = () =>{
    setContador(contador - 1)
  }
  return (
    <div>
  <Button onClick={ () => handleAdd ()}>  sumar </Button>
  <span> {contador}</span>
  <Button onClick={ () => handleSubstract ()}>  restar </Button></div>)

};

export default Counter;