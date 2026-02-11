import {Schema,model} from 'mongoose';
const userSchema = new Schema({
    firstname:{
        type:String,
        required:[true,"firstname is required"]
    },
     lastname:{
        type:String,
       
    },
     email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
     password:{
        type:String,
        required:[true,"password is required"]
    },
     profileImageUrl:{
        type:String,
        required:[true,"profile image url is required"]
    },
    role:{
        type:String,
        enum:["Author","User","Admin"],
        required:[true,"role is required"]
    },
    isActive:{
        type:Boolean,
        default:true
    }
},   
  {
    timestamps:true,
    strict:"throw",
    versionKey:false
}
)

//create user model
export const UserTypeModel = model("users",userSchema);
