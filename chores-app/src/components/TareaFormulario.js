import React, {useState} from 'react';
import './TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario(props) {

    const [ input, setInput ] = useState('');

    const manejarCambio = evt => {
        setInput(evt.target.value)
        console.log(input);
    }

    const manejarFormulario= evt => {
        evt.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return ( 
        <form className='tarea-formulario' onSubmit={manejarFormulario}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button 
                className='form-button' >
                Agregar Tarea
            </button>
        </form>
     );
}

export default TareaFormulario;