import { UserTypeModel } from "../models/UserModel.js"

export const checkAuthor = async (req, res, next) => {
    //get authorId
    let authorId = req.body?.author || req.params?.authorId
    //check weather author exists or not 

    let AuthorObjDb = await UserTypeModel.findById(authorId)
    if (!AuthorObjDb) {
        return res.status(401).json({ message: "Author Not Valid" })
    }
    if(AuthorObjDb.role!=="AUTHOR"){
        return res.status(403).json({message:"User is Not a Author"})
    }
    if(!AuthorObjDb.isActive){
        return res.status(403).json({message:"Author account is not Active"})
    }
    next()
}
