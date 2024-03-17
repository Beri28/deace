const mongoose=require('mongoose')
const catSchema=new mongoose.Schema({
    name:{type:String,required:true},
    designs:[String]
})


module.exports=mongoose.model('categories',catSchema)