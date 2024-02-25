import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = ({showMenu,setShowMenu}) => {
    return ( 
        <div className="container d-flex navbar">
            <div className="logo col-md-6 col-10">
                <Link to='/' >
                    <h2 className='mb-0'>DEACE <i className='fas fa-dove'></i></h2>
                </Link>
            </div>
            <div className="links col-md-6 col-2">
                <ul className='d-md-flex d-none w-100 ps-0 mb-0 navbar-links'>
                    <li className='flex-fill d-flex justify-content-end align-items-center h6'><span><Link to='/'>Home</Link></span></li>
                    <li className="dropdown flex-fill d-flex justify-content-end align-items-center h6">
                        <span className="dropdown-toggle mb-0" data-bs-toggle="dropdown">
                            Collections
                            
                        </span>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Bonnettes</a></li>
                            <li><a className="dropdown-item" href="#">Fascinators</a></li>
                            <li><a className="dropdown-item" href="#">Scarfs</a></li>
                            <li><a className="dropdown-item" href="#">Bubu</a></li>
                            <li><a className="dropdown-item" href="#">Jumpsuits</a></li>
                            <li><a className="dropdown-item" href="#">Accessories</a></li>
                        </ul>
                    </li>
                    <li className='flex-fill d-flex justify-content-end align-items-center h6'><span> <Link to='/about'>About Us</Link></span></li>
                    <li className='flex-fill d-flex justify-content-end align-items-center h6'><span><Link to='/contact'>Contact Us</Link> </span></li>
                </ul>
                <p className='d-md-none d-flex justify-content-end align-items-center mb-0'><i className={showMenu?"fas fa-times":"fas fa-bars"} style={{zIndex:'1000'}} onClick={()=>{setShowMenu(!showMenu)}}></i></p>
            </div>
        </div>
     );
}
 
export default Navbar;