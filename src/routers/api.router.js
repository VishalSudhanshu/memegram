import expess from "express"
import v1router from "./v1/v1.router.js"

const router = expess.Router()

router.use('/v1', v1router)

export default router;