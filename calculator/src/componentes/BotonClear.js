import './BotonClear.css';

const Botonclear = (props) =>{
    return (
        <div 
            className='boton-clear'
            onClick={props.handleClick}>
            {props.children}
        </div>
    );
}

export default Botonclear;