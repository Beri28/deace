import { useState } from 'react'
import './AddModal.css'
const AddModal = ({modalHeading}) => {
    const [name,setName]=useState("")
    const [price,setPrice]=useState('')
    const [size,setSize]=useState('Multiple')
    const [description,setDescription]=useState('')
    const [photo,setPhoto]=useState('')
    const [buttonText,setButtonText]=useState('Add')
    const [spinner,setSpinner]=useState(false)
    const [msg,setMsg]=useState(false)
    let user
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setButtonText('Saving')
        setSpinner(true)
        let img=document.querySelector('#pic').files
        let imgs=[]
        let formData=new FormData()
        formData.append("name",name)
        formData.append("price",price)
        formData.append("size",size)
        formData.append("description",description)
        for(let file of img){
            imgs.push(file)
        }
        imgs.forEach((img,i)=>{
            formData.append('pic',img)
        })
        user=await JSON.parse(localStorage.getItem('deace'))
        if(user && user.admin){ 
            formData.append('admin',user.admin)
            fetch('/api/save/'+user.token,{
            method:'POST',
            credentials:'include',
            body:formData
            }).then(res=>res.json())
            .then((data)=>{
                if(data.Redirect){
                    location.assign(data.Redirect)
                    return
                }
                setButtonText("Saved")
                setSpinner(false)
                setMsg(true)
                location.reload()
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    return ( 
        <div className="d-flex justify-content-center">
            <h3 className='addModal'  data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{setMsg(false)}}>
                Add design
            </h3>


            <div className="modal " id="myModal">
            <div className="modal-dialog w-100" style={{top:"10%"}}>
                <div className="modal-content">


                <div className="modal-header">
                    <h4 className="modal-title">{modalHeading}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                {msg &&<div className='alert alert-success' style={{width:'93.5%',marginLeft:'1em'}}>
                    <span>Design Saved</span>
                </div>}
                <div className="modal-body">
                    <form action="" onSubmit={(e)=>{handleSubmit(e)}}  encType='multipart/form-data'>
                        <div className="form-group my-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} className="form-control" id="" placeholder="Enter design name" onChange={(e)=>{setName(e.target.value)}} />
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" value={price} className="form-control" id="" placeholder="Enter design price" onChange={(e)=>{setPrice(e.target.value)}} />
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="size">Size </label>
                            <select name="size" className='ms-2' id="size" value={size} onChange={(e)=>{setSize(e.target.value)}} required>
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
                            <textarea name="descrition" id="" className="form-control" value={description} placeholder="Enter description if any" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="pic">Picture</label>
                            <input type="file" name="pic" id="pic" multiple="multiple" value={photo} onChange={(e)=>{setPhoto(e.target.value)}}/>
                        </div>
                        <button type="submit" className="btn btn-secondary w-100">{buttonText} {spinner && <span className="spinner-border text-light"></span>}</button>
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