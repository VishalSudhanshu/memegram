import { createUser } from "../repositories/user.repository.js"

export const createUserService = async (user) => {

    try {
        const newUser = await createUser(user)
        return newUser
    } catch (error) {
        console.log("Service error",error);
        throw error
    }
}