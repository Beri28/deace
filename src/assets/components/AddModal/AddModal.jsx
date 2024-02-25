import './AddModal.css'
const AddModal = ({modalHeading}) => {
    return ( 
        <div className="d-flex justify-content-center">
            <h3 className='addModal'  data-bs-toggle="modal" data-bs-target="#myModal">
                Add design
            </h3>


            <div className="modal " id="myModal">
            <div className="modal-dialog w-100" style={{top:"10%"}}>
                <div className="modal-content">


                <div className="modal-header">
                    <h4 className="modal-title">{modalHeading}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                    <form action="" onSubmit={(e)=>e.preventDefault()}>
                        <div className="form-group my-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control" id="" placeholder="Enter design name" />
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" className="form-control" id="" placeholder="Enter design price" />
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <select name="size" className='ms-2' id="size">
                                <option value="Multiple">Multiple</option>
                                <option value="SM">SM</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="descrition">Descrition</label>
                            <textarea name="descrition" id="" className="form-control" placeholder="Enter description if any"></textarea>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="pic">Picture</label>
                            <input type="file" name="pic" id="" multiple="multiple"/>
                        </div>
                        <button type="submit" className="btn btn-secondary w-100">Add</button>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </div>
     );
}
 
export default AddModal;