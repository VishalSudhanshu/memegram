import multer from "multer";
  
export const upload = multer({ 
    storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      if(!file) {
        console.log(file);
        return cb(new Error("File not found"))        
      }
      if(file.mimetype !== "image/jpeg" && file.mimetype !== "image/png"){
        return cb(new Error("File type not supported"))
      }
      console.log(file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) 
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
    }
  })
})
