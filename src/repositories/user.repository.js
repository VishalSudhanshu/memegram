import User from "../schema/user.schema.js";

export const createUser = async (user) => {
    try {
        const newUser = await User.create(user)
        return newUser
    } catch (error) {
        throw error
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        return user
    } catch (error) {
        console.log("Error in fetching user details", error);
    }
}

export const findAllUsers = async () => {
    try {
        const users = await User.find();
        return users
    } catch (error) {
        console.log("Error in fetching users details",error);
    }
}