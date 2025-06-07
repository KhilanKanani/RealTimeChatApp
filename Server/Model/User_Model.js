const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fullName: {
        type: String,
        default:""
    },

    userName: {
        type: String,
        require: true,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },

    image: {
        type: String,
        default: "https://res.cloudinary.com/dx5nhetqj/image/upload/v1748070595/n1elrqsvnxyr4po67pk9.png"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = model("User", userSchema);
module.exports = User