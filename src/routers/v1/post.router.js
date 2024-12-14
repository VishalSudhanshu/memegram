import expess from "express";
import { createPost, deletePost, getPosts, updatePost } from "../../controllers/post.controller.js";
import { upload } from "../../middlewares/multerFileUpload.js";
import { zodPostSchema } from "../../validators/zodPostSchema.js";
import { validate } from "../../validators/zodValidator.js";

const router = expess.Router()

router.post('/', upload.single('image'), validate(zodPostSchema), createPost);

router.get('/', getPosts);

router.delete('/', deletePost)

router.put('/',upload.single('image'), updatePost)
export default router;