import { useEffect, useState } from "react";

const EditModal = ({modalHeading,designId,designName}) => {
    const [name,setName]=useState(designName)
    const [price,setPrice]=useState('')
    const [size,setSize]=useState('Multiple')
    const [category,setCategory]=useState('casual')
    const [description,setDescription]=useState('')
    const [photo,setPhoto]=useState('')
    const [buttonText,setButtonText]=useState('Done')
    const [spinner,setSpinner]=useState(false)
    const [msg,setMsg]=useState(false)
    const [deletePic,setDeletePic]=useState('No')
    const handleClick=()=>{
        // document.querySelector('#name').value=designName
        setButtonText("Done")
    }
    let user
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setButtonText('Updating')
        setSpinner(true)
        let img=document.querySelector('#a'+designId).files
        console.log(img)
        let imgs=[]
        let formData=new FormData()
        formData.append("name",name)
        formData.append("price",price)
        formData.append("size",size)
        formData.append("category",category)
        formData.append("description",description)
        formData.append("_id",designId)
        formData.append("deletePic",deletePic)
        for(let file of img){
            imgs.push(file)
        }
        imgs.forEach((img,i)=>{
            formData.append('pic',img)
        })
        console.log(imgs,category,size)
        user=await JSON.parse(localStorage.getItem('deace'))
        let d=new Date()
        d.setTime(d.getTime())
        d=d.toISOString()
        if(user && user.admin){ 
            if(user.expiresIn>d){
                formData.append('admin',user.admin)
                fetch('/api/edit/'+user.token,{
                method:'POST',
                credentials:'include',
                body:formData
                }).then(res=>res.json())
                .then((data)=>{
                    if(data.Redirect){
                        location.assign(data.Redirect)
                        return
                    }
                    console.log(data)
                    setButtonText("Updated")
                    setSpinner(false)
                    setMsg(true)
                }).catch((err)=>{
                    console.log(err)
                })
                return
            }else{
                localStorage.removeItem('deace')
                location.assign('/login')
            }
        }
    }
    return ( 
        <div className="d-flex justify-content-start">
            <button className='addModal btn btn-secondary btn-sm'  data-bs-toggle="modal" data-bs-target={"#"+designName} onClick={()=>{setMsg(false),handleClick()}}>
                Edit design
            </button>


            <div className="modal " id={designName}>
            <div className="modal-dialog w-100" style={{top:"10%"}}>
                <div className="modal-content">


                <div className="modal-header">
                    <h4 className="modal-title">{modalHeading}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                {msg &&<div className='alert alert-success' style={{width:'93.5%',marginLeft:'1em'}}>
                    <span>Design Updated</span>
                </div>}
                <div className="form-text px-3">Leave input blank for details you want unchanged</div>
                <div className="modal-body">
                    <form action="" onSubmit={(e)=>{handleSubmit(e)}}  encType='multipart/form-data'>
                        <div className="form-group my-2">
                            <label htmlFor="name">New name</label>
                            <input type="text" name="name" value={name} className="form-control" id="name" placeholder="Enter design name" onChange={(e)=>{setName(e.target.value)}} />
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="price">New Price</label>
                            <input type="number" name="price" value={price} className="form-control" id="" placeholder="Enter design price" onChange={(e)=>{setPrice(e.target.value)}} />
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="size">New Size </label>
                            <select name="size" className='ms-2' id="size" value={size} onChange={(e)=>{setSize(e.target.value)}}>
                                <option value="Multiple">Multiple</option>
                                <option value="SM">SM</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="descrition">New Descrition</label>
                            <textarea name="descrition" id="" className="form-control" value={description} placeholder="Enter description if any" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="pic">New Picture</label>
                            <input type="file" name="pic" id={'a'+designId} multiple="multiple" value={photo} onChange={(e)=>{setPhoto(e.target.value)}}/>
                            <label htmlFor="deletePic" className="d-flex">Delete existing pictures :
                                <div className="mx-1">Yes<input type="radio" name="deletePic" id="" value={'Yes'} onChange={((e)=>{setDeletePic(e.target.value)})}/></div>
                                <div className="mx-1">No<input type="radio" name="deletePic" id="" value={'No'} defaultChecked onChange={((e)=>{setDeletePic(e.target.value)})} /></div>
                            </label>
                            <div className="form-text"></div>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="category">Category </label>
                            <select name="category" className='ms-2' id="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
                                <option value="casual">Casual</option>
                                <option value="bonnettes">Bonnettes</option>
                                <option value="fascinators">Fascinators</option>
                                <option value="boubou">Boubou</option>
                                <option value="scarfs">scarfs</option>
                                <option value="jumpsuits">Jumpsuits</option>
                            </select>
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
 
export default EditModal;