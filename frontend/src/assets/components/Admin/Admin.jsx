import { useEffect, useState } from 'react';
import AddModal from '../AddModal/AddModal';
import './Admin.css'
import { Link, useNavigate } from 'react-router-dom';
const Admin =({isAdmin,username}) => {
    const [admin,setAdmin]=useState(isAdmin)
    const [adminName,setAdminName]=useState(username)
    let navigate=useNavigate()
    let user 
    const handleClick=(e)=>{
        localStorage.removeItem('deace')
        let d=new Date()
        d.setTime(d.getTime()+24*60*60*1000)
        d.toUTCString()
        document.cookie="deace='';expires=Thu, 01 Jan 2020 00:00:00 UTC;"
        navigate('/')
    }
    useEffect(()=>{
        let d=new Date()
        d.setTime(d.getTime())
        d=d.toISOString()
        if(!isAdmin){
            user=JSON.parse(localStorage.getItem('deace'))
            if(user && user.admin){
                if(user.expiresIn>d){
                    setAdmin(!isAdmin)
                    setAdminName(user.user)
                    return
                }
                else{
                    localStorage.removeItem('deace')
                    navigate('/login')
                }
            } 
            else{
                navigate('/')
            }
        }
    },[])
    return ( 
        <>
            {!admin && <p className='container p-4 h3'>Loading</p>}
            {admin && <div className="container my-3">
                <div><h2 className="greetings">Welcome {adminName}</h2></div>
                <div className="row d-flex justify-content-md-start justify-content-center">
                    <div className="col-md-4 col-5 add border px-0 mx-lg-0 mx-2 mb-3">
                        <div className="add-bg w-100 h-100 position-relative p-4 d-flex justify-content-center align-items-end text-white">
                            <i className='fas fa-plus fa-lg position-absolute' data-bs-toggle="modal" data-bs-target="#myModal"></i>
                            {/* <h3>Add design</h3> */}
                            <AddModal modalHeading="Add New Design" />
                        </div>
                    </div>
                    <div className="col-md-4 col-5 edit border px-0 mx-lg-0 mx-2 mb-3">
                        <Link to='/admin/edit'>
                            <div className="edit-bg w-100 h-100 position-relative p-4 d-flex justify-content-center align-items-end text-white">
                                <i className='fas fa-edit fa-lg position-absolute'></i>
                                <h3>Edit design</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 col-5 delete border px-0 mx-lg-0 mx-2 mb-3">
                        <Link to='/admin/delete'>
                            <div className="delete-bg w-100 h-100 position-relative p-4 d-flex justify-content-center align-items-end text-white">
                                <i className='fas fa-trash fa-lg position-absolute'></i>
                                <h3>Delete design</h3>
                            </div>
                        </Link>
                    </div>
                    <button type="button" className='btn btn-outline-secondary col-11 col-lg-12' onClick={(e)=>handleClick(e)}>Logout</button>
                </div>
            </div>}
        </>
      
     );
}
 
export default Admin;