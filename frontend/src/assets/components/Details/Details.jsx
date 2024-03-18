import { useEffect, useState } from 'react';
import './Details.css'
import InquireModal from '../InquireModal/InquireModal';
import { useParams } from 'react-router-dom';
const Details = ({designs}) => {
    const [likes,setLikes]=useState(0)
    const {designName}=useParams()
    let focusArray=designs.filter((design)=>{
        return (design.name==designName)
    }) 
    const handleLikes=()=>{
        setLikes(likes+1)
        let name=focusArray[0].name
        fetch(`/api/designs/${name}`,{
            method:'PATCH'
        }).then(res=>res.json())
        .then((data=>{
            console.log(data)
        }))
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        if(focusArray[0]){
            setLikes(focusArray[0].likes)
            return
        }
    },[])
    return ( 
        focusArray.map((focus)=>(
            <div className="container my-4" key={focus._id}>
            <div className="row justify-content-center">
                <div className=" detail-img col-md-6 col-12 mb-3">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">


                        <div className="carousel-indicators">
                            {focus.pic.map((pic,i)=>(
                                <button type="button" data-bs-target="#demo" data-bs-slide-to={i} className={" "+((i==0) && "active")} key={i}></button>
                            ))}
                            {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button> */}
                        </div>


                        <div className="carousel-inner">
                            {focus.pic.map((pic,i)=>(
                                <div className={"carousel-item " + ((i==0) && "active")} key={i}>
                                    <span className='indicator'>{i+1}/{focus.pic.length}</span>
                                    <img src={"../assets/img/"+pic} alt="Los Angeles" className="d-block w-100"/>
                                </div>
                            ))}
                            {/* <div className="carousel-item active">
                                <span className='indicator'>1/2</span>
                                <img src="../../public/assets/img/img-2.jpg" alt="Los Angeles" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <span className='indicator'>2/2</span>
                                <img src="../../public/assets/img/img-4.jpg" alt="New York" className="d-block w-100"/>
                            </div> */}
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="detail-info row col-md-6 col-12 p-2 align-content-start">
                    <h3>{focus.name}</h3>
                    <div className="price col">{focus.price} FCFA</div>
                    <div className="likes col-3">{likes} <i className="fas fa-heart like" onClick={()=>handleLikes()}></i></div>
                    <div className="sizes col">Size : 
                        <select name="size" className='ms-2' id="size">
                            {focus.size.map((size)=>(
                                <option value={size} key={size}>{(size=='Multiple')?"Any":size}</option>
                            ))}
                        </select>
                    </div>
                    <div className="description w-100 my-2"><p>{focus.description}</p>
                    </div>
                    {/* <button type="button" className="btn btn-secondary w-100">Enquire</button> */}
                    <div className="w-100">
                                <InquireModal modalHeading="Test" size='w-100' />
                    </div>
                </div>
            </div>  
        </div>
        ))
       
     );
}
 
export default Details;