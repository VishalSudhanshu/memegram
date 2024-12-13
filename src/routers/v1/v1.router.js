import express from "express"
import postRouter from './post.router.js'
import userRouter from './user.router.js'

const router = express.Router()

router.use('/posts', postRouter)
router.use('/user', userRouter)

export default router