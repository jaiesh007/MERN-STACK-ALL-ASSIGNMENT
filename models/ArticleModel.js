import { Schema,model } from "mongoose";

//crate userCommentSchema
const userCommentSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
    },
    comment:{
        type:String,
    }
});
//create article schema
const articleSchema = new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:[true,"author is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    content:{
        type:String,
        required:[true,"content is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    comments:[userCommentSchema],
    isArticleActive:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true,
    strict:"throw",
    versionKey:false
}
);