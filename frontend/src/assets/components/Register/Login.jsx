import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [eError,setEError]=useState('')
    const [pError,setPError]=useState('')
    const history=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        setEError('')
        setPError('')
        fetch("http://localhost:5000/api/login",{
            method:'POST',
            credentials:'include',
            headers:{
                "Content-type":'application/json'
            },
            body:JSON.stringify({email,password}),
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
            if(data.admin){history('/admin')}
            if(!data.admin && !data.Error)history('/')
            if(data.Error){
                if(data.Error.includes('email'))setEError(data.Error)
                if(data.Error.includes('Password'))setPError(data.Error)
            }
        }).catch((error)=>{
            console.log(error.message)
        })
    }
    useEffect(()=>{
        const checkAuth=async ()=>{
            let d=new Date()
            d.setTime(d.getTime())
            d=d.toISOString()
            let user=JSON.parse(localStorage.getItem('deace'))
            if(user && user.admin){
                if(user.expiresIn>d){
                    history('/admin')
                    return
                }else{
                    localStorage.removeItem('deace')
                    history('/login')
                }
            }
        }
        checkAuth()
      },[])
    return ( 
        <div className="form-bg container d-flex justify-content-center py-4">
            <form action="" onSubmit={(e)=>{handleLogin(e)}} className="border col-md-6 col-10 p-4">
                <h3>Login</h3>
                <div className="form-group my-2">
                    <label htmlFor="email" className='h5'>Email</label>
                    <input type="email" className='form-control' value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required />
                    <div className="form-text text-warning">{eError}</div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password" className='h5'>Password</label>
                    <input type="password" className='form-control' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required />
                    <div className="form-text text-warning">{pError}</div>
                </div>
                <button className="btn btn-outline-secondary w-100 btn-c mb-2">Login</button>
                <Link to='/register'>
                    <button type='button' className="btn btn-outline-secondary w-100 btn-c mt-2">Don't have an acount? Register </button>
                </Link>
            </form>
        </div>
     );
}
 
export default Login;