import Post from "../schema/post.schema.js";

export const createPost = async ({image, caption, user}) => {
    try {
        const newPost = await Post.create({image, caption, user})
        return newPost
    } catch (error) {
        console.log(error);
    }
}

export const findAllPosts =  async (offset, limit) => {
    try {
        const posts = await Post.find().sort({createdAt: -1}).skip(offset).limit(limit)
        return posts
    } catch (error) {
        console.log("error in fetching details",error);
    }
}
export const totalPosts = async () => {
    try {
        const count = Post.countDocuments()
        return count;
    } catch (error) {
        console.log("Error in counting document",error);
    }
}
export const findPostById = async (id) => {
    try {
        const post = await Post.findById(id);
        return post
    } catch (error) {
        console.log("error in fetching details",error);
    } 
}

export const deletePostById =  async (id) => {
    try {
        const response = await Post.findByIdAndDelete(id)
        return response
    } catch (error) {
        console.log("Error deleting document:",error);
    }
}

export const updatePostById = async (id, updateObject) => {
    try {
        const post = await Post.findByIdAndUpdate(id, updateObject, {new: true})  
        return post
    } catch (error) {
        console.log("Error in updating post",error);
    }
}

















