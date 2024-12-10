import expess from "express";
import { createPost, getPosts } from "../../controllers/post.controller.js";
import { upload } from "../../middlewares/multerFileUpload.js";

const router = expess.Router()

router.post('/', upload.single('uploaded_file'), createPost);
router.get('/', getPosts);

export default router;