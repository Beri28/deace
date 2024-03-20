const designSchema=require('../model/design')
const adminSchema=require('../model/admin')
const catSchema=require('../model/categories')
const jwt=require("jsonwebtoken")
const dotenv=require('dotenv').config()
const path=require('path')
const fs=require('fs')

const maxAge=60*60*24
const createToken=((id)=>{
    return jwt.sign({id},process.env.secret,{
        expiresIn:maxAge
    })

})

const saveDesign=async(req,res)=>{
    try{
        let files=req.files
        req.body.pics=[]
        files.forEach((file,i)=>{
            req.body.pics.push(req.body.name.replace(/\s+/g,'') + i + path.extname(file.originalname))
            let oldImagePath= "frontend/public/assets/img/" + file.originalname;
            let newImageName=req.body.pics[i] 
            let newImagePath="frontend/public/assets/img/" + newImageName
            fs.renameSync(`${oldImagePath}`,`${newImagePath}`,(err)=>{
                if(err){
                    throw(err)
                }
            })
        })
        const {name,price,size,category,description,pics}=req.body
        let newDesign=await designSchema.create({name,price,size,category,description,pic:pics})
        if(newDesign){
            res.json({res:"Saved successfully!",id:newDesign._id})
            return
        }
        throw Error("Couldn't save design.")
    }
    catch(error){
        console.log(error.message)
        res.json({Error:error.message})
    }
}
const editDesign=async(req,res)=>{
    try{
        let files=req.files
        console.log(files)
        req.body.pic=[]
        let oldPics=await designSchema.findById(req.body._id).select({"pic":1,"_id":0})
        if(req.body.deletePic=='Yes'){
            oldPics.pic.forEach((pic)=>{
                fs.unlink("frontend/public/assets/img/"+pic,(err)=>{
                    if(err)throw(err)
                })
            })
        }
        files.forEach((file,i)=>{
            req.body.pic.push(req.body.name.replace(/\s+/g,'') + (i+1) + path.extname(file.originalname))
            let oldImagePath= "frontend/public/assets/img/" + file.originalname;
            let newImageName=req.body.pic[i] 
            let newImagePath="frontend/public/assets/img/" + newImageName
            fs.renameSync(oldImagePath,newImagePath,(err)=>{
                if(err){
                    throw(err)
                }
            })
        })
        let data={};
        for(n of Object.keys(req.body)){
            if(n!=='deletePic'){
            if(req.body[n]!=='' && (n!=='_id')){
                data[n]=req.body[n]
            }
            }
        }
        if(req.body.deletePic=='No'){
            let newPics=[...data.pic,...oldPics.pic]
            data.pic=newPics
        }
        console.log(data)
        let updates=await designSchema.findByIdAndUpdate({_id:req.body._id},{$set:data},{new:true})
        res.json({Edited:true})
    }
    catch(err){
        console.log(err.message)
        res.json({Error:err.message})
    }
}
const deleteDesign=async(req,res)=>{
    try{
        let id=req.params.id
        let deletedDesign=await designSchema.findByIdAndDelete({_id:id})
        deletedDesign.pic.forEach((pic)=>{
            fs.unlink("./frontend/public/assets/img/"+pic,(err)=>{
                if(err)throw(err)
            })
        })
        if(deletedDesign){
            res.json({Deleted:true})
            return
        }
        throw Error("Couldn't delete. Probrably because couldn't find design")
    }
    catch(err){
        console.log(err.message)
        res.json({Error:err.message})
    }
}

const register=async(req,res)=>{
    try{
        const newUser=await adminSchema.create(req.body)
        const token=createToken(newUser._id)
        let d=new Date()
        d.setTime(d.getTime()+24*60*60*1000)
        d.toUTCString()
        res.cookie('deace',token,{httpOnly:true,maxAge:maxAge*1000})
        res.status(201).json({user:newUser.username,admin:newUser.admin,token,expiresIn:d})
    }
    catch(error){
        console.log(error.message)
        res.json({Error:error.message})
    }
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        let userResult=await adminSchema.login(email,password)
        if(userResult){
            let token=createToken(userResult._id)
            let d=new Date()
            d.setTime(d.getTime()+24*60*60*1000)
            d.toUTCString()
            res.cookie('deace',token,{httpOnly:true,maxAge:maxAge*1000})
            res.status(200).json({user:userResult.username,admin:userResult.admin,token,expiresIn:d})
        }
        else{
            throw Error("No such user")
        }
    }
    catch(error){
        console.log(error.message)
        res.json({Error:error.message})
    }
}
const admin=(req,res)=>{
    try {
        res.json({Redirect:'/admin'})
    } catch (error) {
        res.json({Error:error.message})
    }
}
const logout=(req,res)=>{
    try {
        res.cookie('deace','',{maxAge:500})
        res.json({Redirect:'/'})
    } catch (error) {
        res.json({Error:error.message})
    }
}
const getDesigns=async(req,res)=>{
    try{
        let designs=await designSchema.find()
        if(designs){
            res.json({designs:designs})
            return
        }
        res.json({designs:"No designs"})
    }
    catch(error){
        console.log(error.message)
        res.json({Error:error.message})
    }
}
const handleLikes=async(req,res)=>{
    try{
        const design=req.params.design
        let update=await designSchema.findOneAndUpdate({name:design},{$inc:{likes:1}})
        if(update){
             res.json({Liked:true})
             return
        }
        res.json({Liked:false})
    }
    catch(err){
        console.log(err.message)
        res.json({Error:err.message})
    }
}
const getCat=async (req,res)=>{
    try{
        let name=req.params.name 
        let cat=await catSchema.findOne({name})
        if(cat){
            res.json({Category:cat})
            return
        }
        res.json({Category:"No category"})
    }
    catch(error){
        console.log(err.message)
        res.json({Error:err.message})
    }
}

exports.saveDesign=saveDesign
exports.register=register
exports.login=login
exports.admin=admin
exports.logout=logout
exports.getDesigns=getDesigns
exports.handleLikes=handleLikes
exports.editDesign=editDesign
exports.deleteDesign=deleteDesign
exports.getCat=getCat