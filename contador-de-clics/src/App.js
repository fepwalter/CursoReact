import './App.css';
import freeCodeCampImg from './images/freeCodeCampImg.png'
import Boton from './componentes/Boton';
import Contador from'./componentes/Contador';
import { useState } from 'react';

function App() {

  const [ contadorClicl, setContadorClicl ] = useState(0);

  const handleClic = () => {
    console.log('Clic');
    setContadorClicl(contadorClicl + 1);
  }

  const recetCounter = () => {
    console.log('Reiniciar');
    setContadorClicl(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='freecodecamp-logo-container'>
          <img 
            className='freecodecamp-logo'
            src={ freeCodeCampImg }
            alt='Logo de FreeCodeCamp'/>
        </div>
      </header>
      <div className="principal-container">
        <Contador 
          numClicks={contadorClicl}/>
      
        <Boton
          text='Click'
          esBotonClick={ true }
          handleClick={ handleClic }/>
          <Boton
            text='Reiniciar'
            esBotonClick={false}
            handleClick={ recetCounter }/>
      </div>

    </div>
  );
}

export default App;
