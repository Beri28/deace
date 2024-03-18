import { Link, Route } from 'react-router-dom';
import './Card.css'
import { useEffect, useState } from 'react';
import InquireModal from '../InquireModal/InquireModal';
const Card = ({imageUrl,design}) => {
    const [likes,setLikes]=useState(0)
    const handleLikes=()=>{
        setLikes(likes+1)
        fetch(`/api/designs/${design.name}`,{
            method:'PATCH'
        }).then(res=>res.json())
        .then((data=>{
        }))
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        setLikes(design.likes)
    },[])
    return ( 
        <div>
            <div className="card card-cover overflow-hidden text-white rounded-5 shadow-lg w-100" style={{backgroundImage: imageUrl,backgroundRepeat:"round"}}>
                <div className="img w-100 h-100">
                    {/*Trial blog starts here  */}
                    <Link to={'/details/'+design.name}>
                    <div className="test w-100 h-55">

                    </div>
                    </Link>
                     <div className="d-flex flex-column h-100 pb-lg-2 p-2 text-white text-shadow-1 justify-content-start align-items-center mt-lg-2">
                        <div className="info d-flex col-md-4 row w-100">
                            <p className="h5 col-12">{design.name}</p>
                            <h6 className="col-6">{design.price}</h6>
                            <h6 className="col-6">
                                <select name="size" id="size">
                                    {design.size.map((size)=>(
                                        <option value={size} key={size}>{(size=='Multiple')?"Any":size}</option>
                                    ))}
                                </select>
                            </h6>
                            <h6 className="col-6"><i className="fas fa-heart pe-2 like" onClick={()=>handleLikes()}></i>{likes}</h6>
                            <div className="col-6">
                                <InquireModal modalHeading="Send Enquiry" />
                            </div>
                        </div>
                    </div>
                    {/* Trial blog ends here */}
                    
                    {/* The blog of code below works well.(Legacy code. In case of stress delete above blog and use the one below) */}
                    {/* <div className="d-flex flex-column h-100 p-lg-5 p-md-3 pb-md-1 pb-lg-2 p-2 text-white text-shadow-1 justify-content-end">
                        <div className="info d-flex col-md-4 row w-100">
                            <p className="h5 col-12">Name</p>
                            <h6 className="col-6">Price</h6>
                            <h6 className="col-6">
                                <select name="size" id="size">
                                    <option value="SM">SM</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </h6>
                            <h6 className="col-6"><i className="fas fa-heart pe-2"></i>14</h6>
                            <button type="button" className="btn btn-secondary btn-sm col-6">Inquire</button>
                        </div>
                    </div> */}
                    {/* Legacy code ends here */}
                </div>
            </div>
        </div>
     );
}
 
export default Card;