const mongoose=require('mongoose')
const catSchema=require('./categories')
const designSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:[true,"A design with that name already exists"]},
    price:{type:String,require:true},
    likes:{type:Number,default:0},
    size:[String],
    category:String,
    description:{type:String,default:"No description for this design"},
    pic:[String]
})
designSchema.post('save',function(){
    catSchema.add(this._id,this.category,this.pic[0])
})


module.exports=mongoose.model('design',designSchema)