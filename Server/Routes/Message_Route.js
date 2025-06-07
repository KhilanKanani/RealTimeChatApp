const express = require("express");
const router = express.Router();
const FindCurrentUser = require("../Middleware/UserMiddleware");
const Upload = require("../Middleware/Image_Multer");
const { SendMessage, GetMessages } = require("../Controller/Message_Controller");

router.post("/sendMessage/:receiverId", FindCurrentUser, Upload, SendMessage);
router.get("/getMessage/:receiverId", FindCurrentUser, GetMessages);

module.exports = router; 