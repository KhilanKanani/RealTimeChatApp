const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({

    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    message: {
        type: String,
        default: ""
    },

    image: {
        type: String,
        default: ""
    }

}, { timestamps: true });

const Message = model("Message", MessageSchema);
module.exports = Message