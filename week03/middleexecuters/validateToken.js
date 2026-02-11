import jwt from 'jsonwebtoken'

export function verifyToken(req,res,next){
    // token verification

    let signedToken=req.cookies.token;
    if(!signedToken){
        return res.status(401).json({message:"please login first"})
    }
    // console.log(req.cookies)
    // 2.verify token
    let decodedToken=jwt.verify(signedToken,'abcdef')
    if(decodedToken===null){
       return  res.status(401).json({message:"login first"})
    }
    next();
}
