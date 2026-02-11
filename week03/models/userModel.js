import { Schema,model } from "mongoose";



const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is Required"],
        minLength:[4,"min length should br 4"],
        maxLength:[6,"max length exceeded"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be less then 25"]
    }
    
},{
    strict:"throw",
    timestamps:true
});

// Create User Model with that Schema
export const UserModel=model("user",userSchema)
