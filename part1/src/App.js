import './App.css';
import Componente from './Componente';

const App = () => {
  const a = 2;
  const b = 3;

  const Descripcion = () => {
    return (
      <>
      <h1>Mensaje como componente</h1>
      <p>Esta no es la mejor forma</p>
      </>
    )
  }

  return (
    <div className="App">
      Hola Mundo
      <strong>{a + b}</strong>
      <Descripcion/>
      <Componente color='red' message='usando componentes con parametros'/>
      <Componente color='blue' message='Hola' />
    </div>
  );
}

export default App;
