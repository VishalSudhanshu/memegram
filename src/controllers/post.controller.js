import { createPostService, findAllPostService } from "../services/post.service.js"
import { uploadOnCloudinary } from "../services/couldinary.service.js"
import { findAllPosts } from "../repositories/post.repository.js";

export async function createPost(req, res) {

    const uploadedFile = await uploadOnCloudinary(req.file.path);
    const imageUrl = uploadedFile.url;
    console.log("Start",JSON.stringify(req.body), req.body.caption);
    

    const post = await createPostService({ caption: req.body.caption , image: imageUrl })
    
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

        const allPosts = await findAllPostService(offset, limit)
        console.log(allPosts);
        
        return res.json({
            success: true,
            data: allPosts
        })
    } catch (error) {
        
    }
    
   
}

  