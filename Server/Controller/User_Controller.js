const UploadOnCloudinary = require("../Config/Image_Cloudinary");
const User = require("../Model/User_Model");

const GetCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;

        const findUser = await User.findById(userId);

        if (!findUser) {
            return res.status(500).json({
                sucess: false,
                message: "User Not Found..."
            })
        }

        return res.status(200).json({
            success: true,
            user: findUser
        })
    }

    catch (err) {
        console.log("GetCurrentUser Error :", err.message);
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const EditProfile = async (req, res) => {

    try {
        let { fullName } = req.body;
        let image;

        if (req.file) {
            image = await UploadOnCloudinary(req.file.path);
        }

        const findUser = await User.findByIdAndUpdate(req.userId, { fullName, image }, { new: true });

        if (!findUser) {
            return res.status(500).json({
                success: false,
                message: "User Not Found..."
            })
        }

        return res.status(200).json({
            success: true,
            message: "Upload Image Successfull....",
            user: findUser
        })
    }

    catch (err) {
        console.log("EditProfile Error :", err.message);
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const GetOtherUser = async (req, res) => {
    try {
        // $ne Means "NotEqualTo" => Current Id Je Login Chhe Eni Sivay Na Badha User Show Thase
        let AllUser = await User.find({ _id: { $ne: req.userId } });

        return res.status(200).json({
            success: true,
            user: AllUser
        });
    }

    catch (err) {
        console.log("GetOtherUser Error :", err.message);
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = { GetCurrentUser, EditProfile, GetOtherUser };