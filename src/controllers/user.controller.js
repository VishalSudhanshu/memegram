import { createUserService } from "../services/user.service.js";

export async function createUser(req, res) {
    try {
        const user = req.body

        console.log(user);
        const newUser = await createUserService(user)
        
        if(!newUser){
            return res.status(500).json({
                success: false,
                message: "Something went wrong"
            })
        }
        console.log(newUser);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })
    } catch (error) {
        console.log("Error in creating account", error.message);
        return res.status(500).json({
            success: false,
            message: "Error in creating user "
        })
    }
}