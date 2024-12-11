import {createPost , totalPosts, findAllPosts, deletePostById, updatePostById} from "../repositories/post.repository.js"

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim()
    const image = createPostObject.image
    // const user = createPostObject.user

    const post = await createPost({caption , image})
    console.log({ caption, image });

    return post
}

export const getAllPostService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit)

    const totalDocuments = await totalPosts()
    
    let totalPages = Math.ceil(totalDocuments/limit)
    if(!limit) totalPages = 1
    return {posts, totalPages, totalDocuments}
}

export const deletePostService = async (id) => {
    const response = await deletePostById(id)

    return response
}

export const updatePostService = async (id, update) => {
    const response = await updatePostById(id, update)

    return response
}