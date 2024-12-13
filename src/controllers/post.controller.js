import { createPostService, deletePostService, getAllPostService, updatePostService } from "../services/post.service.js"
import { uploadOnCloudinary } from "../services/coudinary/couldinaryUpload.service.js"
import { deleteImageFromCloudinary } from "../services/coudinary/coudinaryDelete.service.js";

export async function createPost(req, res) {

    const uploadedFile = await uploadOnCloudinary(req.file.path);
    const imageUrl = uploadedFile.url;

    const post = await createPostService({ caption: req.body.caption, image: imageUrl })

    return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: post
    })
}

export async function getPosts(req, res) {

    try {
        const offset = req.query.offset;
        const limit = req.query.limit;

        const paginatedPosts = await getAllPostService(offset, limit)

        return res.status(200).json({
            success: true,
            message: "All post fetched successfully",
            data: paginatedPosts
        })
    } catch (error) {
        console.log("Error in fetching post", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export async function deletePost(req, res) {
    try {
        const postId = req.query.postId
        const response = await deletePostService(postId)
        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
            data: response
        })
    } catch (error) {
        console.log("Error in deleting post", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export async function updatePost(req, res) {
    try {
        const postId = req.query.postId

        const update = { caption: req.body.caption };

        if (req.file) {
            const uploadedFile = await uploadOnCloudinary(req.file.path);
            if (uploadedFile && uploadedFile.url) {
                update.image = uploadedFile.url;
            }
        }
        
        const response = await updatePostService(postId, update)

        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            data: response
        })

    } catch (error) {
        console.log("Error in updating post", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}