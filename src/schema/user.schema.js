 import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate: {
            validator: function(emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        }
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    }
 }, {timestamps: true})

 const user = mongoose.model("User", userSchema);

 export default user