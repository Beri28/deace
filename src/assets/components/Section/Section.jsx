import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Section.css'
const Section = ({title}) => {
    return ( 
        <div className="container my-4">
            <div className=" d-flex justify-content-center">
                <h2 className="popular pb-2  fw-bold">{title}</h2>
            </div>
            <div className="d-md-flex row justify-content-evenly my-4">
                <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2">
                    <Card  imageUrl="url('/assets/img/img-6.jpg')"  />
                </div>
                <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2">
                    <Card  imageUrl="url('/assets/img/img-7.jpg')"/>
                </div>
                <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2">
                    <Card  imageUrl="url('/assets/img/img-2.jpg')"/>
                </div>
                <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2">
                    <Card  imageUrl="url('/assets/img/img-8.jpg')"/>
                </div>
            </div>
        </div>
     );
}
 
export default Section;