const jwt = require("jsonwebtoken");

const FindCurrentUser = async (req, res, next) => {
    try {
        let token = req.cookies.token;

        if (!token) {
            return res.status(500).json({
                sucess: false,
                message: "Token Not Found..."
            })
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("VerifyToken :", verifyToken);
        console.log("UserId :", verifyToken.userId);
        req.userId = verifyToken.userId;
 
        next();
    }

    catch (err) {
        console.log("FindCurrentUser Error :", err.message);
        return res.status(500).json({
            sucess: false,
            messaage: err.message
        })
    }
}

module.exports = FindCurrentUser;