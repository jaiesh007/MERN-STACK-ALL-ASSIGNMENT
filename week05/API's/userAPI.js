import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { register,authenticate } from '../services/authService.js'
import { checkAuthor } from '../middlewares/checkAuthor.js'
import { verifyToken } from '../middlewares/validateToken.js'

export const userRoute = exp.Router()


// Register USER
userRoute.post('/users', async(req, res) => {
    //get the userObj
    let userObj = req.body
    //call the register
    //you should assign the role here
    const newUserObj=await register({...userObj,role:"USER"})
    //send response
    res.status(201).json({ message: "user registered successfully" })
})

// Autheticate user
userRoute.post("/authenticate",async(req,res)=>{
    let userCred=req.body
    //authenticate the user
    let {token,user}=await authenticate(userCred)
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"login Successfull",payload:user})
})



// read all articles
userRoute.get('/articles',verifyToken,checkUser,async(req,res)=>{
    //check he is a user or not

    // get all articles from ArticleModel
    let articles=await ArticleModel.find()
    res.status(200).json({message:"here are all articles",payload:articles})
})

// Add comment to an article
