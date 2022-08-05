import './App.css';
import freeCodeCampImg from './imagenes/freecodecampImg.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Botonclear from './componentes/BotonClear';
import React, { useState } from 'react';

function App() {

  const [ input, setInput ] = useState('');
  const [ result, setResult ] = useState(0);
  const [ operator, setOperator ] = useState('');
  // const [ overwrite, setOverwrite ] = useState(false);
  // var operador = '+';
  

  console.log(input, result);

  const agregarInput = valor => {
    setInput(prev => prev + valor);
    
    // if(!ops.includes(valor)){
    //   setResult(eval(input + valor).toString())
    // }
  }


  const clearInput = () => {
    setInput('');
    setResult(0);
  }

  const Operation = (value) => {
    setOperator(value);
    setResult(Number(input));
    calculate();
    setInput('');
  }

  const calculate = () => {
    if(input !== '' && result !== 0){
      if (operator === '+') {
        setResult(Number(input) + result);
      }
      if (operator === '-') {
        setResult(result - (Number(input)));
      }    
      if (operator === '*') {
        setResult(Number(input) * result);
      }    
      if (operator === '/' && input !== '0') {
        setResult(result / Number(input));
      }
      setInput(String(result));
    }
    
  }

  const del = () => {
    if (input === '') {
      return
    }
    const newInput = input.slice(0,-1);

    setInput(newInput)
  }

  return (
    <div className="App">
        <header className='freecodecamp-logo-container'>
          <img
            className='freecodecamp-logo'
            src={freeCodeCampImg}
            alt='Logo de FreeCodeCamp'/>

        </header>
        
        <div className='claculator-container'>
          <Pantalla input={input}></Pantalla>
          <div className='row'>
            <Boton handleClick={agregarInput}>1</Boton>
            <Boton handleClick={agregarInput}>2</Boton>
            <Boton handleClick={agregarInput}>3</Boton>
            <Boton handleClick={Operation}>+</Boton>
            
          </div>
          <div className='row'>
            <Boton handleClick={agregarInput}>4</Boton>
            <Boton handleClick={agregarInput}>5</Boton>
            <Boton handleClick={agregarInput}>6</Boton>
            <Boton handleClick={Operation}>-</Boton>
            
          </div>
          <div className='row'>  
            <Boton handleClick={agregarInput}>7</Boton>
            <Boton handleClick={agregarInput}>8</Boton>
            <Boton handleClick={agregarInput}>9</Boton>
            <Boton handleClick={Operation}>*</Boton>
          </div>
          <div className='row'>
            <Boton handleClick={calculate}>=</Boton>
            <Boton handleClick={agregarInput}>0</Boton>
            <Boton handleClick={agregarInput}>.</Boton>
            <Boton handleClick={Operation}>/</Boton>
          </div>
          <div className='row last'>
            <Botonclear handleClick={clearInput}>Clear</Botonclear>
            <Boton handleClick={del}>Del</Boton>
          </div>
          
        </div>
    </div>
  );
}

export default App;
