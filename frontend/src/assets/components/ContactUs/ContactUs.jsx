import './ContactUs.css'
const ContactUs = () => {
    return ( 
        <div className='container p-4'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-10 p-5 white-bg">
                    <form action="" onSubmit={(e)=>e.preventDefault()}>
                        <div className="form-group my-2">
                            <label htmlFor="contact" className='h4'>Contact</label>
                            <input type="text" name="contact" className="form-control rounded shadow" id="" placeholder="Enter your contact" />
                            <div className="form-text">Contact can be phone number or email.</div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="message" className='h4'>Message</label>
                            <textarea name="message" id="" className="form-control rounded shadow" placeholder="Enter your enquiry"></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary w-100">Send</button>
                    </form>
                </div>
                <div className="col-md-6 col-10 p-5 color-bg">
                    <p>Email <i className='fas fa-envelope'></i> : info@deace.co</p>
                    <p>Phone <i className='fas fa-phone'></i> : +237 6 50 47 57 20</p>
                    <p>Address <i className='fas fa-home'></i> : Mile Three Nkwen</p>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;