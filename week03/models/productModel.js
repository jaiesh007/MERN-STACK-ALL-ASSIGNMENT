import { Schema,model } from "mongoose";

const productSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"Product id Is required"]
    },
    productName:{
        type:String,
        required:[true,"product name is required"],
        minLength:[4,"name must ne greater then 4 letters"],
        maxLength:[10,"name must be smaller than 10 letters"]
    },
    price:{
        type:Number,
        required:[true,"product price must be required"],
        min:[100,"product price must be 100"],
        max:[5000,"product price must be less than 5000"]
    }

},{
    strict:"throw",
    timestamps:true
})

export const ProductModel=model("product",productSchema)
