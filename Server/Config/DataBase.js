const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DataBase Connected...");
    }

    catch (err) {
        console.log("DataBase Error :", err.message);
    }
}

module.exports = connectDB;