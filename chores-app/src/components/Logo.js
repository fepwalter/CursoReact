import fcclogo from '../images/fcc-logo.png';
import './Logo.css';

function LogoFCC()  {
    return (
        <div>
            <img 
            src={fcclogo}
            alt='logo de freecodecamp'
            className='fcc-logo' />
      </div>
    )
}

export default LogoFCC;