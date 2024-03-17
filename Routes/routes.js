const express=require('express')
const router=express.Router()
const {saveDesign,editDesign,deleteDesign,register,login,admin,logout,getDesigns,handleLikes}=require('../controller/controller')
const multer=require('multer')
const jwt=require('jsonwebtoken')
const adminSchema=require('../model/admin')

const authMiddleware=(req,res,next)=>{
    const token=req.params.token
    if(token){
        jwt.verify(token,process.env.secret,(err,decodedToken)=>{
            if(err){
                console.log("Error",err.message)
                res.json({Redirect:'/'})
            }else{
                // let userDetails=await adminSchema.findById(decodedToken.id)
                next()
            }
        }) 
    }
    else{
        res.json({Redirect:'/login'})
    } 
}
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'frontend/public/assets/img')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})
router.route('/').get((req,res)=>{
    res.json({Message:"Hello there!"})
})
router.route('/designs').get(getDesigns)
router.patch('/designs/:design',handleLikes)
router.route('/save/:token').post(authMiddleware,upload.array('pic'),saveDesign)
router.route('/edit/:token').post(authMiddleware,upload.array('pic'),editDesign)
router.route('/delete/:token/:id').delete(authMiddleware,deleteDesign)
router.post('/register',register)
router.route('/login').post(login)
router.get('/admin/:token',authMiddleware,admin)
router.route('/logout/:token',authMiddleware,logout)


module.exports=router