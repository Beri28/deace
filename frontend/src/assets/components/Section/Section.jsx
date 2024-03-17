import Card from '../Card/Card';
import './Section.css'
const Section = ({title,designs,loading,empty}) => {
    return ( 
        <div className="container my-4">
            <div className=" d-flex justify-content-center">
                <h2 className="popular pb-2  fw-bold">{title}</h2>
            </div>
            <div className="d-md-flex row justify-content-evenly my-4">
                {loading && <h4 className='d-flex justify-content-center'>Loading</h4> }
                {designs && designs.map((design)=>(
                    <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2" key={design._id}>
                    <Card  imageUrl={"url(assets/img/"+design.pic[0]+")"} design={design}  />
                    </div>  
                ))}
                {empty && <h4 className='d-flex justify-content-center'>No designs to show</h4> }
            </div>
        </div>
     );
}
 
export default Section;