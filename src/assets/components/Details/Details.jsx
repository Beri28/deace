import { useState } from 'react';
import './Details.css'
import InquireModal from '../InquireModal/InquireModal';
const Details = () => {
    const [likes,setLikes]=useState(0)
    return ( 
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className=" detail-img col-md-6 col-12 mb-3">
                    {/* <span className='indicator'>1/2</span>
                    <img src="/assets/img/img-3.jpg" className="w-100 img-fluid rounded" alt="" srcset="" /> */}
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">


                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        </div>


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <span className='indicator'>1/2</span>
                                <img src="assets/img/img-2.jpg" alt="Los Angeles" className="d-block w-100"/>
                            </div>
                            <div className="carousel-item">
                                <span className='indicator'>2/2</span>
                                <img src="assets/img/img-4.jpg" alt="New York" className="d-block w-100"/>
                            </div>
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
                    <div className="price col">17000 FCFA</div>
                    <div className="likes col-3">{likes} <i className="fas fa-heart like" onClick={()=>setLikes(likes+1)}></i></div>
                    <div className="sizes col">Size : 
                        <select name="size" className='ms-2' id="size">
                            <option value="SM">SM</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <div className="description w-100 my-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tenetur quasi facere sint cumque natus saepe autem! Perferendis dolorem natus voluptatibus, 
                        consequatur veniam facere, odit impedit laudantium rerum, voluptate reiciendis tempore!</p>
                    </div>
                    {/* <button type="button" className="btn btn-secondary w-100">Enquire</button> */}
                    <div className="w-100">
                                <InquireModal modalHeading="Test" size='w-100' />
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Details;