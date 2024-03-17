import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
const Register = () => {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [eError,setEError]=useState('')
    const [pError,setPError]=useState('')
    const navigate=useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()
        setEError('')
        setPError('')
        fetch("http://localhost:5000/api/register",{
            method:'POST',
            credentials:'include',
            headers:{
                "Content-type":'application/json'
            },
            body:JSON.stringify({username,email,password}),
        })
        .then(async(res)=>{
            if(res.ok){
                let data=await res.json()
                let d=new Date()
                d.setTime(d.getTime()+24*60*60*1000)
                d.toUTCString()
                localStorage.setItem('deace',JSON.stringify(data))
                document.cookie=`deace=${data.token};expires=${d}`
                return data
            }
            throw Error("Didn't get response")
        })
        .then((data)=>{
            if(data.admin){navigate('/admin')}
            if(!data.admin && !data.Error)navigate('/')
            if(data.Error){
                if(data.Error.includes('duplicate'))setEError('An account with that email already exists')
                if(data.Error.includes('atleast 6'))setPError("Password should be atleast 6 characters")
            }
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    return ( 
        <div className="form-bg container d-flex justify-content-center py-4">
            <form action="" onSubmit={(e)=>handleRegister(e)} className="border col-md-6 col-10 p-4">
                <h3>Register</h3>
                <div className="form-group my-2">
                    <label htmlFor="username" className='h5'>Username</label>
                    <input type="text" className='form-control' name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter username" required />
                    <div className="form-text"></div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email" className='h5'>Email</label>
                    <input type="email" className='form-control' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required />
                    <div className="form-text text-warning">{eError}</div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password" className='h5'>Password</label>
                    <input type="password" className='form-control' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required />
                    <div className="form-text text-warning">{pError}</div>
                </div>

                <button className="btn btn-outline-secondary w-100 btn-c my-2">Create Acount</button>
                <Link to='/login' >
                    <button type='button' className="btn btn-outline-secondary w-100 btn-c mt-2">Already have Acount? Login </button>
                </Link>
            </form>
        </div>
     );
}
 
export default Register;