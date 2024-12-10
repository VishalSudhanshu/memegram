import {createPost , findAllPosts} from "../repositories/post.repository.js"

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim()
    const image = createPostObject.image
    // const user = createPostObject.user

    const post = await createPost({caption , image})
    console.log({ caption, image });

    return post
}

export const findAllPostService = async (offset, limit) => {
    const posts = findAllPosts(offset, limit)
    
    return posts
}