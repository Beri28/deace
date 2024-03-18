import { Link } from 'react-router-dom';
import './Menu.css'
const Menu = ({setShowMenu}) => {
    const handleClick=(e)=>{
        {e.target.id==='menu-bg'&& setShowMenu(false)}
    }
    return ( 
        <div className="menu-bg w-100 h-100 d-flex justify-content-end" id='menu-bg' onClick={(e)=>{handleClick(e)}}>
            <div className="menu-content w-75 h-75 p-5" id='menu-content'>
                <p className='border-bottom'><Link to='/'>Home</Link></p>
                <div className='border-bottom dropdown mb-3'>
                        <span className='dropdown-toggle' data-bs-toggle="dropdown">Collections</span>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Bonnettes</a></li>
                            <li><a className="dropdown-item" href="#">Fascinators</a></li>
                            <li><a className="dropdown-item" href="#">Scarfs</a></li>
                            <li><a className="dropdown-item" href="#">Bubu</a></li>
                            <li><a className="dropdown-item" href="#">Jumpsuits</a></li>
                            <li><a className="dropdown-item" href="#">Accessories</a></li>
                        </ul>
                </div>
                <p className='border-bottom'><Link to='/about'>About Us</Link></p>
                <p className='border-bottom'><Link to='/contact'>Contact Us</Link></p>
                <p className='border-bottom'><Link to='/credits'>Image Credits</Link></p>
                <p className='border-bottom'><Link to='/login'>Login</Link></p>
            </div>
        </div>
     );
}
 
export default Menu;