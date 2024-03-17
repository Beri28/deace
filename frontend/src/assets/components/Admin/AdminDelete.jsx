import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import DeleteCard from "../DeleteCard/DeleteCard"
import './Admin.css'

const AdminDelete = ({isAdmin,username,designs,loading,empty}) => {
    const [admin,setAdmin]=useState(isAdmin)
    const [adminName,setAdminName]=useState(username)
    let user
    useEffect(()=>{
        if(!isAdmin){
            user=JSON.parse(localStorage.getItem('deace'))
            if(user && user.admin){
                setAdmin(!isAdmin)
                setAdminName(user.user)
            } 
            else{
                navigate('/')
            }
        }
    },[])
    return ( 
        <>
            {!admin && <p className='container p-4 h3'>Loading</p>}
            {admin &&
                <div className="container my-3">
                    <div><h2 className="greetings px-2"><i className="fas fa-user user-icon fa-sm"></i>{adminName}</h2></div>
                    {empty && <h4 className='d-flex justify-content-center'>No designs to show</h4> }
                    <div className="d-md-flex row justify-content-evenly my-4">
                    {designs.map((design)=>(
                        <div  className={"col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2 " + design.name} key={design._id}>
                        
                            <DeleteCard design={design}/>
                        </div>  

                    ))}
                    </div>
                </div>
            }
        </>
     );
}
 
export default AdminDelete;