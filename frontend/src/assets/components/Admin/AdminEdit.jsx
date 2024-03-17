import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import EditModal from "../EditModal/EditModal"
import './Admin.css'


const AdminEdit = ({isAdmin,username,designs,loading,empty}) => {
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
            {/* {loading && <h4 className='d-flex justify-content-center'>Loading</h4> } */}
            {admin &&
                <div className="container my-3">
                    <div><h2 className="greetings px-2"><i className="fas fa-user user-icon"></i> {adminName}</h2></div>
                    {empty && <h4 className='d-flex justify-content-center'>No designs to show</h4> }
                    <div className="d-md-flex row justify-content-evenly my-4">
                    {designs.map((design)=>(
                        <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2" key={design._id}>
                            <div className="card card-cover overflow-hidden text-white rounded-5 shadow-lg w-100" style={{backgroundImage:"url('../assets/img/"+design.pic[0]+"')" ,backgroundRepeat:"round"}}>
                                <div className="img w-100 h-100">
                                    <Link to={'/details/'+design.name}>
                                    <div className="test w-100 h-55">

                                    </div>
                                    </Link>
                                    <div className="d-flex flex-column h-100 pb-lg-2 p-1 text-white text-shadow-1 justify-content-start align-items-center mt-lg-2">
                                        <div className="info d-flex col-md-4 row w-100">
                                            <div className="col">
                                                <h3>{design.name}</h3>
                                            </div>
                                            <div className="col">
                                                <EditModal modalHeading="Edit Design" designId={design._id} designName={design.name}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  

                    ))}
                    </div>
                </div>
            }
        </>
     );
}
 
export default AdminEdit;