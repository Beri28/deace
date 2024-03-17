const mongoose=require('mongoose')
const designSchema=new mongoose.Schema({
    name:{type:String,required:true},//unique:[true,"A design with that name already exists"]},
    price:{type:String,require:true},
    likes:{type:Number,default:0},
    size:[String],
    description:{type:String,default:"No description for this design"},
    pic:[String]
})


module.exports=mongoose.model('design',designSchema)