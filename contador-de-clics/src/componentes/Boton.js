import React from 'react';
import './Boton.css';

function Boton ({ text, esBotonClick, handleClick }) {
    return (
        <button
            className={ esBotonClick ? 'boton-clic' : 'boton-reiniciar' }
            onClick={ handleClick }>
            { text }
        </button>

    );
}

export default Boton;