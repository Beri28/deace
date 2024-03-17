import './Card2.css'
const Card2 = ({imgUrl,collName}) => {
    return ( 
        <div>
            <div className="w-100">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: imgUrl,backgroundRepeat:"round"}}>
                    <div className="card2-overlay">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 lh-1 fw-bold h4">{collName}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card2;