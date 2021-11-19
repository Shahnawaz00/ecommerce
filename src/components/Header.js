import { FaShoppingCart} from 'react-icons/fa';
import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header' >
            <Link className='links title' to='/'>E-nawaz</Link>
            <div  >
            <Link to='/cart' className='links'><FaShoppingCart className='header-icons' size={28} /></Link>
            </div>
           
        </div>
    )
}

export default Header
