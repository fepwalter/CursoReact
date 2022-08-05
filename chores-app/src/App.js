import './App.css';
import ListaTareas from './components/ListaTareas';
import Logo from './components/Logo';


function App() {
  return (
    <div className="App">
      <Logo/>
      <div className='chores-app'>
        <h1>Mis Tareas..!!</h1>
        <ListaTareas />
        
      </div>
    </div>
  );
}

export default App;
