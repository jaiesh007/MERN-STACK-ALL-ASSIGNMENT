import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {UserTypeModel} from '../models/UserModel.js'


//resgister function
export const register = async(userObj) => {
    //create document
    const userDoc = new userModel(userObj)
    //call validate method to check
    await userDoc.validate()
    //hash and replace the password
    userDoc.password = await bcrypt.hash(userDoc.password,10)
    //save
    const created = await userDoc.save()
    //convert the mongodb Documnet into js object
    const newuserObj = created.toObject()
    //remove the password using delete
    delete newuserObj.password;
    //return the usreObj
    return newuserObj; 
}


//authentication function
export const authentication = async ({email,password,role}) => {
    //check user with email & role
    const user = await userModel.findOne({email,role});
    if(!user) {
        const err = new Error("Invalid email or role");
        err.status = 401;
        throw err;
    }

    //compare password
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) {
        const err = new Error("Invalid password");
        err.status = 401;
        throw err;
    }

    //generate token
    const token = jwt.sign({usreId : user_id,
        role : user.role,
        email: user.email
    },
process.env.SECRET_KEY,
{expiresIn : "1h"}
)
const userObj = user.toObject()
delete userObj.password;
return {token,user : userObj}

}
