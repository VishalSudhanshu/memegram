import expess from "express";
import { createPost, deletePost, getPosts, updatePost } from "../../controllers/post.controller.js";
import { upload } from "../../middlewares/multerFileUpload.js";

const router = expess.Router()

router.post('/', upload.single('image'), createPost);

router.get('/', getPosts);

router.delete('/', deletePost)

router.put('/',upload.single('image'), updatePost)
export default router;