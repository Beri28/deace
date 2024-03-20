import { useState } from 'react'
import './InquireModal.css'
const InquireModal = ({modalHeading,size}) => {
    const [contact,setContact]=useState('')
    const [message,setMessage]=useState('')
    const [submitted,setSubmitted]=useState(false)
    const [error,setError]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('https://formspree.io/f/xgeglypq',{
            method:'POST',
            headers:{
                'Accept':'application/json'
            },
            body:JSON.stringify({contact,message})
        }).then(res=>{
            if(res.ok){
                setSubmitted(true)
                return res.json()
            }
            throw Error("Couldn't submit")
        }).catch((err)=>{
            setError(true)
        })
    }
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
                {submitted && <div className='alert alert-success' style={{width:'93.5%',marginLeft:'1em'}}>
                    <span>Thanks for your submission</span>
                </div>}
                {error && <div className='alert alert-danger' style={{width:'93.5%',marginLeft:'1em'}}>
                    <span>Submission was unsuccessful</span>
                </div>}
                <div className="modal-body">
                    <form action="" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="form-group my-2">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" name="contact" className="form-control" id="" placeholder="Enter contact" value={contact} onChange={(e)=>setContact(e.target.value)} required />
                            <div className="form-text">Contact can be phone number or email.</div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="" className="form-control" placeholder="Enter your enquiry" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
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