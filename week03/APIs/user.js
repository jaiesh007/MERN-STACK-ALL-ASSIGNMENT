import exp from 'express'
export const userApp=exp.Router()
import { hash,compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/userModel.js' 
import { verifyToken } from '../midExecuters/verifyToken.js'

userApp.get('/users',async(req,res)=>{
    //read users from database
    let users=await UserModel.find()
    res.status(200).json({message:"all users",payload:users})
})


// user login or authentication
userApp.post('/auth',async(req,res)=>{
    let userObj=req.body
    let userOfDb=await UserModel.findOne({username:userObj.username})
    if(userOfDb===null){
        return res.status(404).json({message:"username not valid"})
    }
    // compare password with registered one
    let status=await compare(userObj.password,userOfDb.password) 
    if(status===false){
        return res.status(404).json({message:"password not valid"})
    }
    let signedToken=jwt.sign({username:userObj.username},'abcdef',{expiresIn:30})

    // save token as httpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly:true,//it is httpOnly cookie
        secure:false,//used for https if true
        sameSite:"lax"
        // "lax" moderate relax
        // "none" is no restirction
    })

    res.status(200).json({message:"login success"})

    // u should not send token as response
    // res.status(200).json({message:"login success",token:signedToken})
})

// create post mapping
userApp.post('/users',async(req,res)=>{
    let newUser=req.body;
    // create new User model
    // hashing passsword
    let hashedPassword=await hash(newUser.password,12)
    // changing 
    newUser.password=hashedPassword
    let newUserDoc=new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"user created"})  
})

// get by id
userApp.get('/users/:id',async(req,res)=>{
    let objectId=req.params.id
    let userObj=await UserModel.findById(objectId)
    res.status(200).json({message:"all users",payload:userObj})

})

userApp.put('/users/:id',async(req,res)=>{
    let objectId=req.params.id
    let modifiedUser=req.body
    let leatestUser=await UserModel.findByIdAndUpdate(objectId,{$set:{...modifiedUser}},{new :true,runValidators:true})
    res.status(200).json({message:"all users",payload:leatestUser})
})

userApp.delete('/users/:id',async(req,res)=>{
    let objectId=req.params.id
    let deletedUser=await UserModel.findByIdAndDelete(objectId)
    res.status(200).json({message:"all users",payload:deletedUser})
})

userApp.get("/test",verifyToken,(req,res)=>{
    res.json({message:"valid token"})
})
