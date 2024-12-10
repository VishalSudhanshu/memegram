import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    caption:{
        type: String,
        required: true
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }, 
    // like:{
    //     type: moongoose.Schema.Types.ObjectId, 
    //     ref: "User"
    // }

}, {timestamps: true})

const post = mongoose.model("Post", postSchema)

export default post