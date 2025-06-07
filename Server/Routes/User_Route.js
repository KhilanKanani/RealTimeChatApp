const express = require("express");
const router = express.Router();
const FindCurrentUser = require("../Middleware/UserMiddleware");
const { GetCurrentUser, EditProfile, GetOtherUser } = require("../Controller/User_Controller");
const Upload = require("../Middleware/Image_Multer")

router.get("/current", FindCurrentUser, GetCurrentUser);
router.get("/otherUser", FindCurrentUser, GetOtherUser);
router.put("/edit", FindCurrentUser, Upload, EditProfile);

module.exports = router; 