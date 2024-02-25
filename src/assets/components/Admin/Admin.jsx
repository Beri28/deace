import AddModal from '../AddModal/AddModal';
import './Admin.css'
const Admin = () => {
    return ( 
        <div className="container my-3">
            <div><h2 className="greetings">Welcome Asheri</h2></div>
            <div className="row d-flex justify-content-md-start justify-content-center">
                <div className="col-md-4 col-5 add border px-0 mx-lg-0 mx-2 mb-3">
                    <div className="add-bg w-100 h-100 position-relative p-4 d-flex justify-content-center align-items-end text-white">
                        <i className='fas fa-plus fa-lg position-absolute'></i>
                        {/* <h3>Add design</h3> */}
                        <AddModal modalHeading="Add New Design" />
                    </div>
                </div>
                <div className="col-md-4 col-5 edit border px-0 mx-lg-0 mx-2 mb-3">
                    <div className="edit-bg w-100 h-100 position-relative p-4 d-flex justify-content-center align-items-end text-white">
                        <i className='fas fa-edit fa-lg position-absolute'></i>
                        <h3>Edit design</h3>
                    </div>
                </div>
                <div className="col-md-4 col-5 delete border px-0 mx-lg-0 mx-2 mb-3">
                    <div className="delete-bg w-100 h-100 position-relative p-4 d-flex justify-content-center align-items-end text-white">
                        <i className='fas fa-trash fa-lg position-absolute'></i>
                        <h3>Delete design</h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Admin;