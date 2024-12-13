import { createUser } from "../repositories/user.repository.js"

export const createUserService = async (user) => {

    try {
        const newUser = await createUser(user)
        return newUser
    } catch (error) {
        if(error.name === "MongoServerError" && error.code === 11000){
            throw {
                status: 400, 
                message: "User with same email or username already exist"
            }
        }
        throw error
    }
}