import React, { useState } from 'react';
import './ListaTareas.css';
import TareaFormulario from './TareaFormulario';
import Tarea from '../components/Tarea';


function ListaTareas() {

    const [ tareas, setTareas ] = useState ([]);

    const agregarTarea = tarea => {
        console.log('tarea agregada')
        console.log(tarea);
        if(tarea.texto.trim()) {
            tarea.texto= tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]; //de esta forma se agrega la tarea nueva al principio del arreglo y con el operador spread agrega el resto del arreglo que ya tenia.
            setTareas(tareasActualizadas);
        }
    }

    return ( 
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='lista-tareas-container'>
                {
                    tareas.map((tarea) =>
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
     );
}

export default ListaTareas;