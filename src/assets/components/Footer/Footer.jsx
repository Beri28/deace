import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return ( 
        <div className="footer-bg w-100">
            <div className="footer-content container d-flex p-md-4 p-2 pt-4 border-bottom mb-2">
                <div className="col-md-6 col-7">
                    <ul className="footer-links">
                        <li>
                            <Link to='/' >
                                <span>Home</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to='/collections' >
                                <span>Collections</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' >
                                <span>About Us</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' >
                                <span>Contact Us</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to='/credits' >
                                <span>Credits</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' >
                                <span>Login</span> 
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-5">
                    <h4>Social media</h4>
                    <p className='w-25'><i className="fab fa-facebook"></i></p>
                    <p className='w-25'><i className="fab fa-twitter"></i></p>
                    <p className='w-25'><i className="fab fa-instagram"></i></p>
                    
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <h6>Copyright <i className="fas fa-copyright"></i> DEACE<i className='fas fa-dove px-1'></i> 2024</h6>
            </div>
        </div>
     );
}
 
export default Footer;