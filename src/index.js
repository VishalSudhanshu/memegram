import { PORT } from "./config/serverConfig.js"
import express from 'express'
import fs from "fs";
import connectDB from "./config/dbConfig.js"
import apiRouter from "./routers/api.router.js"
import { upload } from "./middlewares/multerFileUpload.js"
import { createPost } from "./controllers/post.controller.js";

const app = express()

app.use(express.urlencoded()) 
app.use(express.json()) 
app.use(express.text()) 

const uploadDirectory = './uploads/';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true }); // Create directory recursively
}

app.get("/", (req, res) => {
    return res.json({message: "success"})
})

app.use('/api', apiRouter)

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}/`);
    connectDB()
})