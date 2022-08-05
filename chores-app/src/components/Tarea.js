import './Tarea.css';
import { BsXCircle } from 'react-icons/bs';

function Tarea({ id, text, completada, completarTarea, eliminarTarea }) {
    return ( 
        <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
            <div 
                className="tarea-text"
                onClick={() => completarTarea(id)} >
                {text}
            </div>
            <div 
                className="tarea-icon-container"
                onClick={() => eliminarTarea(id)} >
                <BsXCircle className='react-icon' />
            </div>
        </div>
     );
}

export default Tarea;