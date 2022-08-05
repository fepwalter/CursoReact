import { useState } from 'react';
import './App.css';
import Componente from './Componente';
import  Counter  from './components/Counter';
import  Button  from './components/Button';
import Gift from './components/Gift';

const App = () => {
  const a = 2;
  const b = 3;
// Un componente:
  const Descripcion = () => {
    return (
      <>
      <h1>Mensaje como componente</h1>
      <p>Esta no es la mejor forma</p>
      </>
    )
  }

//UseState:
  const [ contador, setContador ] = useState(0);
  const [ keyword, setKeyword ] = useState('');

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  return (
    <div className="App">
      Hola Mundo
      <strong>{a + b}</strong>
      <Descripcion/>
      <Componente color='red' message='usando componentes con parametros'/>
      <Componente color='blue' message='Hola' />
      <Counter contador={contador}/>
      <Button text={'Aumentar'} handleClick={() => { setContador(contador + 1)}}/>
      <Button text={'Disminuir'} handleClick={() =>{setContador(contador - 1)}}/>
      <br></br>
      <input onChange={handleChange} placeholder='Ingrese palabra clave'></input>
      <Gift keyword={keyword}/>
    </div>
  );
}

export default App;
