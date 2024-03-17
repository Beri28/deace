import './InquireModal.css'
const InquireModal = ({modalHeading,size}) => {
    return ( 
        <div>
            <button type="button" className={"btn btn-secondary btn-sm " + size} data-bs-toggle="modal" data-bs-target="#myModal">
                Enquire
            </button>


            <div className="modal " id="myModal">
            <div className="modal-dialog w-100" style={{top:"22%"}}>
                <div className="modal-content">


                <div className="modal-header">
                    <h4 className="modal-title">{modalHeading}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                    <form action="" onSubmit={(e)=>e.preventDefault()}>
                        <div className="form-group my-2">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" name="contact" className="form-control" id="" placeholder="Enter contact" />
                            <div className="form-text">Contact can be phone number or email.</div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="" className="form-control" placeholder="Enter your enquiry"></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary w-100">Send</button>
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
 
export default InquireModal;