const mongoose=require('mongoose')
const catSchema=new mongoose.Schema({
    name:{type:String,required:true},
    designs:[String],
    img:String,
})
catSchema.statics.add=async function(id,category,pic){
    // this.name=category
    // this.designs=[...this.designs,id]
    let cat=await this.findOne({name:category})
    if(cat){
        console.log(cat)
        let newdesigns=[...cat.designs,id]
        await this.findOneAndUpdate({name:category},{$set:{designs:newdesigns}})
    }
    else{
        this.create({name:category,designs:[id],pic:pic})
    }
}


module.exports=mongoose.model('categories',catSchema)