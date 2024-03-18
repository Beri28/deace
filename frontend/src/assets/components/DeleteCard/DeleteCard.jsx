import { useState } from "react";
import { Link } from "react-router-dom";

const DEleteCard = ({design}) => {
    const [deleted,setDeleted]=useState(false)
    let user
    const handleDelete=(e)=>{
        e.preventDefault()
        let id=e.target.id
        user=JSON.parse(localStorage.getItem('deace'))
        fetch('/api/delete/'+user.token+'/'+id,{
            method:"DELETE"
        }).then(res=>res.json())
        .then((data)=>{
            location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
        setDeleted(true)
    }
    return ( 
        <>
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
                                    <button type="button" disabled={deleted} className="btn btn-secondary btn-sm mt-2" id={design._id} onClick={(e)=>handleDelete(e)}>Delete design</button>
                                    {deleted &&<button type="button" className="btn btn-success">Deleted</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
     );
}
 
export default DEleteCard;