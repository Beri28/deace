const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const adminSchema=new mongoose.Schema({
    username:{type:String,required:[true,"Admin name must be provided"]},
    email:{type:String,required:[true,"Admin email must be provided"],unique:[true,"Admin with that email already exists!"]},
    password:{type:String,require:[true,"Password must be provided"],minlength:[6,"Password should be atleast 6 characters"]},
    admin:{type:Boolean,default:false}
},{timestamps:true})

adminSchema.pre('save',function(next){
    console.log("About to save")
    let newPassword=bcrypt.hashSync(this.password,10)
    this.password=newPassword
    next()
})

adminSchema.statics.login=async function(email,password){
    let userResult=await this.findOne({email:email})
    if(userResult){
        if(await bcrypt.compare(password,userResult.password)){
            return userResult
        }
        throw Error("Password incorrect")
    }
    throw Error("User with that email doesn't exist")

}

module.exports=mongoose.model('admin',adminSchema)