import Card2 from "../Card2/Card2";
import './Section.css'
const Section2 = ({title,id,top}) => {
    return ( 
        <div className="container my-4 pe-0 ps-1 position-relative">
            <i className="fas fa-arrow-right position-absolute d-md-none fa-lg pe-2" style={{color:"white",fontSize:'x-large',zIndex:"20",right:"0",top:top}}></i>
            <div className=" d-flex justify-content-center">
                <h2 className="popular pb-2  fw-bold">{title}</h2>
            </div>
            <div className="d-flex my-4 pipe d-md-none" id={id}>
                <Card2 imgUrl="url('assets/img/img-5.jpg')" collName="Bonnets"/>
                <Card2 imgUrl="url('assets/img/img-3.jpg')" collName="Fascinators"/>
                <Card2 imgUrl="url('assets/img/img-5.jpg')" collName="Bubu"/>
                <Card2 imgUrl="url('assets/img/img-3.jpg')" collName="Scarfs"/>
                <Card2 imgUrl="url('assets/img/img-5.jpg')" collName="Jumpsuits"/>
                <Card2 imgUrl="url('assets/img/img-3.jpg')" collName="Accessories"/>
            </div>
            <div className="d-md-flex d-none row justify-content-center my-4">
                <div className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3">
                    <Card2  imgUrl="url('/assets/img/img-6.jpg')" collName="Bonnets"  />
                </div>
                <div className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3">
                    <Card2  imgUrl="url('/assets/img/img-7.jpg')" collName="Fascinators"/>
                </div>
                <div className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3">
                    <Card2  imgUrl="url('/assets/img/img-2.jpg')" collName="Bubu"/>
                </div>
                <div className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3">
                    <Card2  imgUrl="url('/assets/img/img-8.jpg')" collName="Scarfs"/>
                </div>
                <div className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3">
                    <Card2  imgUrl="url('/assets/img/img-6.jpg')" collName="Jumpsuits" />
                </div>
                <div className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3">
                    <Card2  imgUrl="url('/assets/img/img-7.jpg')" collName="Accessories"/>
                </div>
            </div>
        </div>
     );
}
 
export default Section2;