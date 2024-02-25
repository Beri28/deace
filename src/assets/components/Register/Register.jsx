import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return ( 
        <div className="form-bg container d-flex justify-content-center py-4">
            <form action="" className="border col-md-6 col-10 p-4">
                <h3>Register</h3>
                <div className="form-group my-2">
                    <label htmlFor="username" className='h5'>Username</label>
                    <input type="text" className='form-control' name="username" placeholder="Enter username" required />
                    <div className="form-text"></div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email" className='h5'>Email</label>
                    <input type="email" className='form-control' name="email" placeholder="Enter email" required />
                    <div className="form-text"></div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password" className='h5'>Password</label>
                    <input type="password" className='form-control' name="password" placeholder="Enter password" required />
                    <div className="form-text">Password should be a minimum of 6 characters</div>
                </div>

                <button className="btn btn-outline-secondary w-100 btn-c mb-2">Create Acount</button>
                <Link to='/login' >
                    <button type='button' className="btn btn-outline-secondary w-100 btn-c mt-2">Already have Acount? Login </button>
                </Link>
            </form>
        </div>
     );
}
 
export default Register;