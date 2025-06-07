const { Schema, model } = require("mongoose");

const ConversationSchema = new Schema({

    participaint: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "Message"
        }
    ]

}, { timestamps: true });

const Conversation = model("conversation", ConversationSchema);
module.exports = Conversation