const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "./Public")
    },

    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

const Upload = multer({ storage });
module.exports = Upload.single("image"); 