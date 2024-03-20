import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const CategoryDetail = ({designs}) => {
    const [loading,setLoading]=useState(true)
    const [filtered,setFiltered]=useState(designs)
    const [empty,setEmpty]=useState(false)
    if(!filtered[0]){
        fetch('/api/designs',{
            method:'GET'
        }).then(res=>res.json())
        .then(data=>{
            if(!filtered[0]){
                setFiltered(data.designs.filter((design)=>{
                    return design.category==name
                }))
            }
        })
        .catch((err)=>{
            // setLoading(false)
            // setEmpty(true)
            console.log(err)
        })
    }
    let {name}=useParams()
    useEffect(()=>{
        fetch('/api/categories/'+name,{
            method:'GET'
        }).then(res=>{
            if(res.ok){
                return res.json()
            }
            throw Error("Couldn't fetch")
        })
        .then((data)=>{
            setLoading(false)
            setFiltered(filtered.filter((design)=>{
                return design.category==name
            }))
            if(!data.Category.designs[0]){
                setEmpty(true)
                return
            }
        })
        .catch((err)=>{
            setLoading(false)
            setEmpty(true)
            console.log(err)
        })
    },[])
    return ( 
        <div className="d-md-flex row justify-content-evenly my-4">
        {loading && <h4 className='d-flex justify-content-center'>Loading</h4> }
        {filtered && filtered.map((design)=>(
            <div  className="col-lg-3 col-md-4 col-5 shadow px-0  mb-3 mx-md-2" key={design._id}>
                <Card  imageUrl={"url(assets/img/"+design.pic[0]+")"} design={design}  />
            </div>
        ))}
        {empty && <h4 className='d-flex justify-content-center'>No designs to show</h4> }
        </div>
     );
}
 
export default CategoryDetail;